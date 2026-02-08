import type { VercelRequest, VercelResponse } from "@vercel/node";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
const ADMIN_COOKIE = "admin_session";

export default function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { password } = req.body;

    if (password === ADMIN_PASSWORD) {
        res.setHeader(
            "Set-Cookie",
            `${ADMIN_COOKIE}=authenticated; HttpOnly; Secure; SameSite=Strict; Max-Age=86400; Path=/`
        );
        return res.json({ success: true });
    }

    return res.status(401).json({ error: "Invalid password" });
}
