import type { VercelRequest, VercelResponse } from "@vercel/node";
import { parse } from "cookie";

const ADMIN_COOKIE = "admin_session";

export default function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const cookies = parse(req.headers.cookie || "");
    const isAuthenticated = cookies[ADMIN_COOKIE] === "authenticated";

    return res.json({ authenticated: isAuthenticated });
}
