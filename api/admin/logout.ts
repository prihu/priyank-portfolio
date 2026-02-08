import type { VercelRequest, VercelResponse } from "@vercel/node";

const ADMIN_COOKIE = "admin_session";

export default function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    res.setHeader(
        "Set-Cookie",
        `${ADMIN_COOKIE}=; HttpOnly; Secure; SameSite=Strict; Max-Age=0; Path=/`
    );
    return res.json({ success: true });
}
