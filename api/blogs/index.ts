import type { VercelRequest, VercelResponse } from "@vercel/node";
import RssParser from "rss-parser";
import { createClient } from "@supabase/supabase-js";

const parser = new RssParser();
const SUBSTACK_FEED = "https://productoped.substack.com/feed";
const SUBSTACK_URL = "https://productoped.substack.com";

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

function getSupabase(useServiceKey = false) {
    if (!supabaseUrl) return null;
    const key = useServiceKey && supabaseServiceKey ? supabaseServiceKey : supabaseKey;
    if (!key) return null;
    return createClient(supabaseUrl, key);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // GET - List blogs from RSS, filter by visibility settings
    if (req.method === "GET") {
        try {
            console.log("Fetching RSS feed from:", SUBSTACK_FEED);
            const feed = await parser.parseURL(SUBSTACK_FEED);
            console.log(`Fetched ${feed.items.length} items from RSS`);

            // Get visibility settings from Supabase if available
            const supabase = getSupabase();
            let visibilityMap: Record<string, boolean> = {};

            if (supabase) {
                const { data, error } = await supabase
                    .from("blog_visibility")
                    .select("substack_id, is_visible");

                if (error) {
                    console.error("Supabase error fetching visibility:", error);
                }

                if (data) {
                    visibilityMap = data.reduce((acc, item) => {
                        acc[item.substack_id] = item.is_visible;
                        return acc;
                    }, {} as Record<string, boolean>);
                }
            }

            const allBlogs = feed.items.map((item, index) => {
                const substackId = item.link || `blog-${index}`;
                // Default to visible if not explicitly set to false
                const isVisible = visibilityMap[substackId] !== false;

                return {
                    id: index + 1,
                    substackId,
                    title: item.title || "",
                    excerpt: item.contentSnippet?.substring(0, 200) + "..." || "",
                    link: item.link || "",
                    publishedDate: item.pubDate || new Date().toISOString(),
                    category: "Product",
                    readTime: "5 min read",
                    isVisible,
                };
            });

            // Return all blogs for admin, or only visible for public
            const isAdmin = (req.headers.cookie || "").includes("admin_session=authenticated");
            const returnedBlogs = isAdmin ? allBlogs : allBlogs.filter(b => b.isVisible);

            console.log(`Returning ${returnedBlogs.length} blogs (Admin: ${isAdmin})`);

            return res.json({
                blogs: returnedBlogs,
                substackUrl: SUBSTACK_URL,
                totalCount: feed.items.length,
            });
        } catch (error) {
            console.error("Error fetching Substack feed:", error);
            // Return empty list but valid JSON to prevent frontend crash
            return res.status(200).json({
                error: "Failed to fetch blogs",
                blogs: [],
                substackUrl: SUBSTACK_URL,
                totalCount: 0
            });
        }
    }

    // PUT - Update blog visibility (admin only)
    if (req.method === "PUT") {
        const cookies = req.headers.cookie || "";
        const isAdmin = cookies.includes("admin_session=authenticated");

        if (!isAdmin) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const supabase = getSupabase(true); // Try Service Key first, falls back to anon
        if (!supabase) {
            return res.status(500).json({ error: "Database not configured" });
        }

        const { substackId, title, isVisible } = req.body;

        if (!substackId) {
            return res.status(400).json({ error: "Missing substackId" });
        }

        console.log(`Updating visibility for ${substackId} to ${isVisible}`);

        // Use the RPC function (SECURITY DEFINER) to bypass RLS
        const { data, error } = await supabase.rpc("set_blog_visibility", {
            p_substack_id: substackId,
            p_title: title || "",
            p_is_visible: isVisible,
        });

        if (error) {
            console.error("Supabase RPC error:", error);
            return res.status(500).json({ error: error.message });
        }
        return res.json(data);
    }

    return res.status(405).json({ error: "Method not allowed" });
}
