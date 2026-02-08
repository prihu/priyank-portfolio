import type { VercelRequest, VercelResponse } from "@vercel/node";
import RssParser from "rss-parser";

const parser = new RssParser();
const SUBSTACK_FEED = "https://productoped.substack.com/feed";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const feed = await parser.parseURL(SUBSTACK_FEED);

        const blogs = feed.items.slice(0, 10).map((item, index) => ({
            id: index + 1,
            title: item.title || "",
            excerpt: item.contentSnippet?.substring(0, 200) + "..." || "",
            link: item.link || "",
            publishedDate: item.pubDate || new Date().toISOString(),
            category: "Product",
            readTime: "5 min read",
        }));

        return res.json(blogs);
    } catch (error) {
        console.error("Error fetching Substack feed:", error);
        return res.status(500).json({ error: "Failed to fetch blogs" });
    }
}
