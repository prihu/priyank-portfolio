/**
 * Vercel Serverless Handler for Admin Logout
 */
import type { VercelRequest, VercelResponse } from "@vercel/node";

const ADMIN_COOKIE = "admin_session";

export default function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    // Clear cookie
    res.setHeader(
        "Set-Cookie",
        `${ADMIN_COOKIE}=; HttpOnly; Secure; SameSite=Strict; Max-Age=0; Path=/`
    );
    return res.json({ success: true });
}
