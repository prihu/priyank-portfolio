import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, InsertTestimonial, testimonials, InsertBlog, blogs } from "../drizzle/schema";
import { ENV } from './_core/env';
import * as neonDb from '../shared/db';
import { getVisiblePosts, getAllPostsForAdmin, type SubstackPost } from '../shared/substack';

// Check if we're using Neon PostgreSQL
const USE_NEON = !!(process.env.DATABASE_URL || process.env.NEON_DATABASE_URL);

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Testimonials queries - Uses Neon PostgreSQL when available
export async function getAllTestimonials() {
  if (USE_NEON) {
    return neonDb.getAllTestimonials();
  }

  const db = await getDb();
  if (!db) return [];

  return await db.select().from(testimonials).where(eq(testimonials.isPublished, true));
}

export async function createTestimonial(data: InsertTestimonial) {
  if (USE_NEON) {
    return neonDb.createTestimonial({
      quote: data.quote,
      author: data.author,
      role: data.role,
      company: data.company,
      is_published: true
    });
  }

  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.insert(testimonials).values(data);
  return result;
}

export async function updateTestimonial(id: number, data: Partial<InsertTestimonial>) {
  if (USE_NEON) {
    return neonDb.updateTestimonial(id, {
      quote: data.quote,
      author: data.author,
      role: data.role,
      company: data.company,
      is_published: data.isPublished
    });
  }

  const db = await getDb();
  if (!db) throw new Error("Database not available");

  return await db.update(testimonials).set(data).where(eq(testimonials.id, id));
}

export async function deleteTestimonial(id: number) {
  if (USE_NEON) {
    return neonDb.deleteTestimonial(id);
  }

  const db = await getDb();
  if (!db) throw new Error("Database not available");

  return await db.delete(testimonials).where(eq(testimonials.id, id));
}

// Blogs queries - Now fetches from Substack RSS
export async function getAllBlogs(): Promise<SubstackPost[]> {
  return getVisiblePosts();
}

export async function getAllBlogsForAdmin(): Promise<SubstackPost[]> {
  return getAllPostsForAdmin();
}

// Legacy MySQL blog functions (kept for backwards compatibility)
export async function createBlog(data: InsertBlog) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const result = await db.insert(blogs).values(data);
  return result;
}

export async function updateBlog(id: number, data: Partial<InsertBlog>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  return await db.update(blogs).set(data).where(eq(blogs.id, id));
}

export async function deleteBlog(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  return await db.delete(blogs).where(eq(blogs.id, id));
}
