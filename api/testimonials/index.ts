import type { VercelRequest, VercelResponse } from "@vercel/node";
import { neon } from "@neondatabase/serverless";

const databaseUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || "";

function getDb() {
    if (!databaseUrl) {
        return null;
    }
    return neon(databaseUrl);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const sql = getDb();

    if (!sql) {
        return res.status(500).json({ error: "Database not configured" });
    }

    // GET - List all testimonials (public, only published ones)
    if (req.method === "GET") {
        try {
            const data = await sql`
                SELECT * FROM testimonials
                WHERE is_published = true
                ORDER BY created_at DESC
            `;
            return res.json(data || []);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    // For write operations, check admin auth
    const cookies = req.headers.cookie || "";
    const isAdmin = cookies.includes("admin_session=authenticated");

    if (!isAdmin) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    // POST - Create new testimonial
    if (req.method === "POST") {
        const { quote, author, role, company } = req.body;

        if (!quote || !author || !role || !company) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        try {
            const data = await sql`
                INSERT INTO testimonials (quote, author, role, company, is_published)
                VALUES (${quote}, ${author}, ${role}, ${company}, true)
                RETURNING *
            `;
            return res.status(201).json(data[0]);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    // PUT - Update testimonial
    if (req.method === "PUT") {
        const { id, ...updates } = req.body;

        if (!id) {
            return res.status(400).json({ error: "Missing testimonial ID" });
        }

        try {
            const data = await sql`
                UPDATE testimonials
                SET
                    quote = COALESCE(${updates.quote ?? null}, quote),
                    author = COALESCE(${updates.author ?? null}, author),
                    role = COALESCE(${updates.role ?? null}, role),
                    company = COALESCE(${updates.company ?? null}, company),
                    is_published = COALESCE(${updates.is_published ?? null}, is_published),
                    updated_at = NOW()
                WHERE id = ${id}
                RETURNING *
            `;
            return res.json(data[0]);
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    // DELETE - Delete testimonial
    if (req.method === "DELETE") {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ error: "Missing testimonial ID" });
        }

        try {
            await sql`DELETE FROM testimonials WHERE id = ${id}`;
            return res.json({ success: true });
        } catch (error: any) {
            return res.status(500).json({ error: error.message });
        }
    }

    return res.status(405).json({ error: "Method not allowed" });
}
