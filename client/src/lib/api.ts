/**
 * REST API Client for serverless functions
 * Replaces tRPC for Vercel deployment
 */

export interface Testimonial {
    id: number;
    quote: string;
    author: string;
    role: string;
    company: string;
    is_published: boolean;
    created_at: string;
    updated_at: string;
}

export interface Blog {
    id: number;
    title: string;
    excerpt: string;
    link: string;
    publishedDate: string;
    category: string;
    readTime: string;
}

const API_BASE = "/api";

// Testimonials API
export const testimonialsApi = {
    list: async (): Promise<Testimonial[]> => {
        const res = await fetch(`${API_BASE}/testimonials`);
        if (!res.ok) return [];
        return res.json();
    },

    create: async (data: Omit<Testimonial, "id" | "is_published" | "created_at" | "updated_at">): Promise<Testimonial> => {
        const res = await fetch(`${API_BASE}/testimonials`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Failed to create testimonial");
        return res.json();
    },

    update: async (id: number, data: Partial<Testimonial>): Promise<Testimonial> => {
        const res = await fetch(`${API_BASE}/testimonials`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ id, ...data }),
        });
        if (!res.ok) throw new Error("Failed to update testimonial");
        return res.json();
    },

    delete: async (id: number): Promise<void> => {
        const res = await fetch(`${API_BASE}/testimonials`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ id }),
        });
        if (!res.ok) throw new Error("Failed to delete testimonial");
    },
};

// Blogs API
export const blogsApi = {
    list: async (): Promise<Blog[]> => {
        const res = await fetch(`${API_BASE}/blogs`);
        if (!res.ok) return [];
        return res.json();
    },
};

// Admin API
export const adminApi = {
    login: async (password: string): Promise<boolean> => {
        const res = await fetch(`${API_BASE}/admin/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ password }),
        });
        return res.ok;
    },

    logout: async (): Promise<void> => {
        await fetch(`${API_BASE}/admin/logout`, {
            method: "POST",
            credentials: "include",
        });
    },

    check: async (): Promise<boolean> => {
        const res = await fetch(`${API_BASE}/admin/check`, {
            credentials: "include",
        });
        if (!res.ok) return false;
        const data = await res.json();
        return data.authenticated;
    },
};
