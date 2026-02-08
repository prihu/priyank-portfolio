import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Lazy initialization to avoid errors when env vars aren't loaded yet
let _supabase: SupabaseClient | null = null;

function getSupabaseClient(): SupabaseClient | null {
    if (_supabase) return _supabase;

    const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || '';
    const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';

    if (!supabaseUrl || !supabaseAnonKey) {
        console.warn('[Supabase] Missing credentials, database features disabled');
        return null;
    }

    _supabase = createClient(supabaseUrl, supabaseAnonKey);
    return _supabase;
}

// Types for our database tables
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

export interface BlogVisibility {
    id: number;
    substack_id: string;
    title: string;
    is_visible: boolean;
    created_at: string;
    updated_at: string;
}

// Testimonials CRUD
export async function getAllTestimonials(): Promise<Testimonial[]> {
    const client = getSupabaseClient();
    if (!client) return [];

    const { data, error } = await client
        .from('testimonials')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('[Supabase] Error fetching testimonials:', error);
        return [];
    }
    return data || [];
}

export async function createTestimonial(testimonial: Omit<Testimonial, 'id' | 'created_at' | 'updated_at'>) {
    const client = getSupabaseClient();
    if (!client) throw new Error('Database not available');

    const { data, error } = await client
        .from('testimonials')
        .insert([testimonial])
        .select()
        .single();

    if (error) throw error;
    return data;
}

export async function updateTestimonial(id: number, updates: Partial<Testimonial>) {
    const client = getSupabaseClient();
    if (!client) throw new Error('Database not available');

    const { data, error } = await client
        .from('testimonials')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

    if (error) throw error;
    return data;
}

export async function deleteTestimonial(id: number) {
    const client = getSupabaseClient();
    if (!client) throw new Error('Database not available');

    const { error } = await client
        .from('testimonials')
        .delete()
        .eq('id', id);

    if (error) throw error;
    return { success: true };
}

// Blog visibility management
export async function getBlogVisibility(): Promise<BlogVisibility[]> {
    const client = getSupabaseClient();
    if (!client) return [];

    const { data, error } = await client
        .from('blog_visibility')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('[Supabase] Error fetching blog visibility:', error);
        return [];
    }
    return data || [];
}

export async function setBlogVisibility(substackId: string, title: string, isVisible: boolean) {
    const client = getSupabaseClient();
    if (!client) throw new Error('Database not available');

    const { data, error } = await client
        .from('blog_visibility')
        .upsert([{
            substack_id: substackId,
            title,
            is_visible: isVisible,
            updated_at: new Date().toISOString()
        }], { onConflict: 'substack_id' })
        .select()
        .single();

    if (error) throw error;
    return data;
}
