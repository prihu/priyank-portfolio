import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "";

function getSupabase() {
    if (!supabaseUrl || !supabaseKey) {
        return null;
    }
    return createClient(supabaseUrl, supabaseKey);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const supabase = getSupabase();

    if (!supabase) {
        return res.status(500).json({ error: "Database not configured" });
    }

    // GET - List all testimonials (public, only published ones)
    if (req.method === "GET") {
        const { data, error } = await supabase
            .from("testimonials")
            .select("*")
            .eq("is_published", true)
            .order("created_at", { ascending: false });

        if (error) {
            return res.status(500).json({ error: error.message });
        }
        return res.json(data || []);
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

        const { data, error } = await supabase
            .from("testimonials")
            .insert([{ quote, author, role, company, is_published: true }])
            .select()
            .single();

        if (error) {
            return res.status(500).json({ error: error.message });
        }
        return res.status(201).json(data);
    }

    // PUT - Update testimonial
    if (req.method === "PUT") {
        const { id, ...updates } = req.body;

        if (!id) {
            return res.status(400).json({ error: "Missing testimonial ID" });
        }

        const { data, error } = await supabase
            .from("testimonials")
            .update({ ...updates, updated_at: new Date().toISOString() })
            .eq("id", id)
            .select()
            .single();

        if (error) {
            return res.status(500).json({ error: error.message });
        }
        return res.json(data);
    }

    // DELETE - Delete testimonial
    if (req.method === "DELETE") {
        const { id } = req.body;

        if (!id) {
            return res.status(400).json({ error: "Missing testimonial ID" });
        }

        const { error } = await supabase
            .from("testimonials")
            .delete()
            .eq("id", id);

        if (error) {
            return res.status(500).json({ error: error.message });
        }
        return res.json({ success: true });
    }

    return res.status(405).json({ error: "Method not allowed" });
}
