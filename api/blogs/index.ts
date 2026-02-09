import type { VercelRequest, VercelResponse } from "@vercel/node";
import RssParser from "rss-parser";
import { createClient } from "@supabase/supabase-js";

const parser = new RssParser();
const SUBSTACK_FEED = "https://productoped.substack.com/feed";
const SUBSTACK_URL = "https://productoped.substack.com";

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "";

function getSupabase() {
    if (!supabaseUrl || !supabaseKey) return null;
    return createClient(supabaseUrl, supabaseKey);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const supabase = getSupabase();

    // GET - List blogs from RSS, filter by visibility settings
    if (req.method === "GET") {
        try {
            const feed = await parser.parseURL(SUBSTACK_FEED);

            // Get visibility settings from Supabase if available
            let visibilityMap: Record<string, boolean> = {};
            if (supabase) {
                const { data } = await supabase
                    .from("blog_visibility")
                    .select("substack_id, is_visible");

                if (data) {
                    visibilityMap = data.reduce((acc, item) => {
                        acc[item.substack_id] = item.is_visible;
                        return acc;
                    }, {} as Record<string, boolean>);
                }
            }

            const allBlogs = feed.items.map((item, index) => {
                const substackId = item.link || `blog-${index}`;
                return {
                    id: index + 1,
                    substackId,
                    title: item.title || "",
                    excerpt: item.contentSnippet?.substring(0, 200) + "..." || "",
                    link: item.link || "",
                    publishedDate: item.pubDate || new Date().toISOString(),
                    category: "Product",
                    readTime: "5 min read",
                    // Default to visible if not in visibility table
                    isVisible: visibilityMap[substackId] !== false,
                };
            });

            // Return all blogs for admin, or only visible for public
            const isAdmin = (req.headers.cookie || "").includes("admin_session=authenticated");

            return res.json({
                blogs: isAdmin ? allBlogs : allBlogs.filter(b => b.isVisible),
                substackUrl: SUBSTACK_URL,
                totalCount: feed.items.length,
            });
        } catch (error) {
            console.error("Error fetching Substack feed:", error);
            return res.status(500).json({ error: "Failed to fetch blogs", blogs: [], substackUrl: SUBSTACK_URL });
        }
    }

    // PUT - Update blog visibility (admin only)
    if (req.method === "PUT") {
        const cookies = req.headers.cookie || "";
        const isAdmin = cookies.includes("admin_session=authenticated");

        if (!isAdmin) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        if (!supabase) {
            return res.status(500).json({ error: "Database not configured" });
        }

        const { substackId, title, isVisible } = req.body;

        if (!substackId) {
            return res.status(400).json({ error: "Missing substackId" });
        }

        const { data, error } = await supabase
            .from("blog_visibility")
            .upsert([{
                substack_id: substackId,
                title: title || "",
                is_visible: isVisible,
                updated_at: new Date().toISOString(),
            }], { onConflict: "substack_id" })
            .select()
            .single();

        if (error) {
            return res.status(500).json({ error: error.message });
        }
        return res.json(data);
    }

    return res.status(405).json({ error: "Method not allowed" });
}
