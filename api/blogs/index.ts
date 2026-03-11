import type { VercelRequest, VercelResponse } from "@vercel/node";
import RssParser from "rss-parser";
import { neon } from "@neondatabase/serverless";

const parser = new RssParser();
const SUBSTACK_FEED = "https://productoped.substack.com/feed";
const SUBSTACK_URL = "https://productoped.substack.com";

const databaseUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || "";

function getDb() {
    if (!databaseUrl) return null;
    return neon(databaseUrl);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // GET - List blogs from RSS, filter by visibility settings
    if (req.method === "GET") {
        try {
            console.log("Fetching RSS feed from:", SUBSTACK_FEED);
            const feed = await parser.parseURL(SUBSTACK_FEED);
            console.log(`Fetched ${feed.items.length} items from RSS`);

            // Get visibility settings from Neon if available
            const sql = getDb();
            let visibilityMap: Record<string, boolean> = {};

            if (sql) {
                try {
                    const data = await sql`
                        SELECT substack_id, is_visible FROM blog_visibility
                    `;

                    if (data) {
                        visibilityMap = data.reduce((acc: Record<string, boolean>, item: any) => {
                            acc[item.substack_id] = item.is_visible;
                            return acc;
                        }, {} as Record<string, boolean>);
                    }
                } catch (error) {
                    console.error("DB error fetching visibility:", error);
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

        const sql = getDb();
        if (!sql) {
            return res.status(500).json({ error: "Database not configured" });
        }

        const { substackId, title, isVisible } = req.body;

        if (!substackId) {
            return res.status(400).json({ error: "Missing substackId" });
        }

        console.log(`Updating visibility for ${substackId} to ${isVisible}`);

        try {
            // Direct SQL upsert — replaces the Supabase RPC function
            const data = await sql`
                INSERT INTO blog_visibility (substack_id, title, is_visible, updated_at)
                VALUES (${substackId}, ${title || ""}, ${isVisible}, NOW())
                ON CONFLICT (substack_id)
                DO UPDATE SET
                    is_visible = EXCLUDED.is_visible,
                    title = EXCLUDED.title,
                    updated_at = NOW()
                RETURNING *
            `;
            return res.json(data[0]);
        } catch (error: any) {
            console.error("DB error:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    return res.status(405).json({ error: "Method not allowed" });
}
