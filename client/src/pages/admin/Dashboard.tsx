/**
 * Admin Dashboard
 * Manage testimonials and blog visibility
 */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    MessageSquare,
    BookOpen,
    Plus,
    Trash2,
    Edit2,
    Save,
    X,
    LogOut,
    Home,
    Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { testimonialsApi, blogsApi, adminApi, type Testimonial, type Blog } from "@/lib/api";

export default function AdminDashboard() {
    const [, setLocation] = useLocation();
    const [activeTab, setActiveTab] = useState<"testimonials" | "blogs">("testimonials");
    const [isAddingTestimonial, setIsAddingTestimonial] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [isSaving, setIsSaving] = useState(false);

    // Data state
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    // Form state
    const [formData, setFormData] = useState({
        quote: "",
        author: "",
        role: "",
        company: "",
    });

    // Fetch data on mount
    useEffect(() => {
        loadTestimonials();
        loadBlogs();
    }, []);

    const loadTestimonials = async () => {
        const data = await testimonialsApi.list();
        setTestimonials(data);
    };

    const loadBlogs = async () => {
        const data = await blogsApi.list();
        setBlogs(data);
    };

    const resetForm = () => {
        setFormData({ quote: "", author: "", role: "", company: "" });
        setIsAddingTestimonial(false);
        setEditingId(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);
        try {
            if (editingId) {
                await testimonialsApi.update(editingId, formData);
            } else {
                await testimonialsApi.create(formData);
            }
            await loadTestimonials();
            resetForm();
        } catch (error) {
            console.error("Error saving testimonial:", error);
        } finally {
            setIsSaving(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Delete this testimonial?")) return;
        try {
            await testimonialsApi.delete(id);
            await loadTestimonials();
        } catch (error) {
            console.error("Error deleting testimonial:", error);
        }
    };

    const startEdit = (t: Testimonial) => {
        setEditingId(t.id);
        setFormData({
            quote: t.quote,
            author: t.author,
            role: t.role,
            company: t.company,
        });
        setIsAddingTestimonial(true);
    };

    const handleLogout = async () => {
        await adminApi.logout();
        setLocation("/admin");
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-xl">
                <div className="container px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <h1 className="text-xl font-display font-bold text-foreground">
                            Admin Dashboard
                        </h1>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" asChild>
                            <a href="/" className="flex items-center gap-2">
                                <Home className="w-4 h-4" />
                                View Site
                            </a>
                        </Button>
                        <Button variant="ghost" size="sm" onClick={handleLogout}>
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                        </Button>
                    </div>
                </div>
            </header>

            <div className="container px-4 sm:px-6 lg:px-8 py-8">
                {/* Tabs */}
                <div className="flex gap-2 mb-8">
                    <button
                        onClick={() => setActiveTab("testimonials")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === "testimonials"
                            ? "bg-foreground text-background"
                            : "bg-secondary/10 text-foreground hover:bg-secondary/20"
                            }`}
                    >
                        <MessageSquare className="w-4 h-4" />
                        Testimonials ({testimonials.length})
                    </button>
                    <button
                        onClick={() => setActiveTab("blogs")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${activeTab === "blogs"
                            ? "bg-foreground text-background"
                            : "bg-secondary/10 text-foreground hover:bg-secondary/20"
                            }`}
                    >
                        <BookOpen className="w-4 h-4" />
                        Blogs ({blogs.length})
                    </button>
                </div>

                {/* Testimonials Tab */}
                {activeTab === "testimonials" && (
                    <div>
                        {/* Add Button */}
                        {!isAddingTestimonial && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mb-6"
                            >
                                <Button
                                    onClick={() => setIsAddingTestimonial(true)}
                                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                                >
                                    <Plus className="w-4 h-4 mr-2" />
                                    Add Testimonial
                                </Button>
                            </motion.div>
                        )}

                        {/* Add/Edit Form */}
                        {isAddingTestimonial && (
                            <motion.form
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                onSubmit={handleSubmit}
                                className="mb-8 p-6 rounded-2xl border border-border bg-card"
                            >
                                <h3 className="text-lg font-semibold mb-4">
                                    {editingId ? "Edit Testimonial" : "Add New Testimonial"}
                                </h3>

                                <div className="grid gap-4 mb-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">Quote</label>
                                        <textarea
                                            value={formData.quote}
                                            onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                                            className="w-full p-3 rounded-lg border border-border bg-background resize-none"
                                            rows={3}
                                            required
                                            minLength={10}
                                        />
                                    </div>
                                    <div className="grid sm:grid-cols-3 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Author Name</label>
                                            <input
                                                type="text"
                                                value={formData.author}
                                                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                                                className="w-full p-3 rounded-lg border border-border bg-background"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Role</label>
                                            <input
                                                type="text"
                                                value={formData.role}
                                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                                className="w-full p-3 rounded-lg border border-border bg-background"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">Company</label>
                                            <input
                                                type="text"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                className="w-full p-3 rounded-lg border border-border bg-background"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <Button type="submit" disabled={isSaving}>
                                        <Save className="w-4 h-4 mr-2" />
                                        {editingId ? "Update" : "Save"}
                                    </Button>
                                    <Button type="button" variant="ghost" onClick={resetForm}>
                                        <X className="w-4 h-4 mr-2" />
                                        Cancel
                                    </Button>
                                </div>
                            </motion.form>
                        )}

                        {/* List */}
                        {testimonials.length === 0 ? (
                            <div className="text-center py-16 text-muted-foreground">
                                <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-30" />
                                <p>No testimonials yet. Add your first one!</p>
                            </div>
                        ) : (
                            <div className="grid gap-4">
                                {testimonials.map((t) => (
                                    <motion.div
                                        key={t.id}
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
                                    >
                                        <p className="text-foreground mb-4 italic">"{t.quote}"</p>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-semibold text-foreground">{t.author}</p>
                                                <p className="text-sm text-muted-foreground">
                                                    {t.role} at {t.company}
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => startEdit(t)}
                                                >
                                                    <Edit2 className="w-4 h-4" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleDelete(t.id)}
                                                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Blogs Tab */}
                {activeTab === "blogs" && (
                    <div>
                        <div className="mb-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                            <p className="text-sm text-foreground">
                                <strong>Note:</strong> Blog posts are pulled from your Substack RSS feed automatically.
                            </p>
                        </div>

                        {blogs.length === 0 ? (
                            <div className="text-center py-16 text-muted-foreground">
                                <BookOpen className="w-12 h-12 mx-auto mb-4 opacity-30" />
                                <p>No blog posts yet. Publish on Substack to see them here.</p>
                            </div>
                        ) : (
                            <div className="grid gap-4">
                                {blogs.map((blog) => (
                                    <div
                                        key={blog.id}
                                        className="p-6 rounded-xl border border-border bg-card flex items-center justify-between"
                                    >
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-foreground mb-1">{blog.title}</h3>
                                            <p className="text-sm text-muted-foreground line-clamp-1">
                                                {blog.excerpt}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-4 ml-4">
                                            <span className="text-xs text-muted-foreground">
                                                {blog.category}
                                            </span>
                                            <div className="flex items-center gap-2">
                                                <Check className="w-4 h-4 text-green-500" />
                                                <span className="text-xs text-green-600">Visible</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
