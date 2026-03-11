import { neon, NeonQueryFunction } from '@neondatabase/serverless';

// Lazy initialization to avoid errors when env vars aren't loaded yet
let _sql: NeonQueryFunction<false, false> | null = null;

function getDb(): NeonQueryFunction<false, false> | null {
    if (_sql) return _sql;

    const databaseUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || '';

    if (!databaseUrl) {
        console.warn('[DB] Missing DATABASE_URL, database features disabled');
        return null;
    }

    _sql = neon(databaseUrl);
    return _sql;
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
    const sql = getDb();
    if (!sql) return [];

    try {
        const rows = await sql`
            SELECT * FROM testimonials
            WHERE is_published = true
            ORDER BY created_at DESC
        `;
        return rows as Testimonial[];
    } catch (error) {
        console.error('[DB] Error fetching testimonials:', error);
        return [];
    }
}

export async function createTestimonial(testimonial: Omit<Testimonial, 'id' | 'created_at' | 'updated_at'>) {
    const sql = getDb();
    if (!sql) throw new Error('Database not available');

    const rows = await sql`
        INSERT INTO testimonials (quote, author, role, company, is_published)
        VALUES (${testimonial.quote}, ${testimonial.author}, ${testimonial.role}, ${testimonial.company}, ${testimonial.is_published})
        RETURNING *
    `;
    return rows[0];
}

export async function updateTestimonial(id: number, updates: Partial<Testimonial>) {
    const sql = getDb();
    if (!sql) throw new Error('Database not available');

    // Build SET clause dynamically for provided fields
    const updatedAt = new Date().toISOString();
    const rows = await sql`
        UPDATE testimonials
        SET
            quote = COALESCE(${updates.quote ?? null}, quote),
            author = COALESCE(${updates.author ?? null}, author),
            role = COALESCE(${updates.role ?? null}, role),
            company = COALESCE(${updates.company ?? null}, company),
            is_published = COALESCE(${updates.is_published ?? null}, is_published),
            updated_at = ${updatedAt}
        WHERE id = ${id}
        RETURNING *
    `;
    if (rows.length === 0) throw new Error('Testimonial not found');
    return rows[0];
}

export async function deleteTestimonial(id: number) {
    const sql = getDb();
    if (!sql) throw new Error('Database not available');

    await sql`DELETE FROM testimonials WHERE id = ${id}`;
    return { success: true };
}

// Blog visibility management
export async function getBlogVisibility(): Promise<BlogVisibility[]> {
    const sql = getDb();
    if (!sql) return [];

    try {
        const rows = await sql`
            SELECT * FROM blog_visibility
            ORDER BY created_at DESC
        `;
        return rows as BlogVisibility[];
    } catch (error) {
        console.error('[DB] Error fetching blog visibility:', error);
        return [];
    }
}

export async function setBlogVisibility(substackId: string, title: string, isVisible: boolean) {
    const sql = getDb();
    if (!sql) throw new Error('Database not available');

    const rows = await sql`
        INSERT INTO blog_visibility (substack_id, title, is_visible, updated_at)
        VALUES (${substackId}, ${title}, ${isVisible}, NOW())
        ON CONFLICT (substack_id)
        DO UPDATE SET
            is_visible = EXCLUDED.is_visible,
            title = EXCLUDED.title,
            updated_at = NOW()
        RETURNING *
    `;
    return rows[0];
}
