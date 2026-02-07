import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

function createAdminContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "admin-user",
    email: "admin@example.com",
    name: "Admin User",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

function createRegularUserContext(): TrpcContext {
  const user: AuthenticatedUser = {
    id: 2,
    openId: "regular-user",
    email: "user@example.com",
    name: "Regular User",
    loginMethod: "manus",
    role: "user",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  return {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("testimonials", () => {
  describe("testimonials.list", () => {
    it("returns an array for public users (no auth required)", async () => {
      const ctx = createPublicContext();
      const caller = appRouter.createCaller(ctx);
      const result = await caller.testimonials.list();
      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe("testimonials.create", () => {
    it("rejects unauthenticated users", async () => {
      const ctx = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.testimonials.create({
          quote: "Great product manager!",
          author: "John Doe",
          role: "Engineering Lead",
          company: "Google",
        })
      ).rejects.toThrow();
    });

    it("rejects non-admin users", async () => {
      const ctx = createRegularUserContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.testimonials.create({
          quote: "Great product manager!",
          author: "John Doe",
          role: "Engineering Lead",
          company: "Google",
        })
      ).rejects.toThrow();
    });

    it("rejects invalid input (quote too short)", async () => {
      const ctx = createAdminContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.testimonials.create({
          quote: "Short",
          author: "John Doe",
          role: "Lead",
          company: "Google",
        })
      ).rejects.toThrow();
    });
  });

  describe("testimonials.delete", () => {
    it("rejects unauthenticated users", async () => {
      const ctx = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.testimonials.delete({ id: 1 })
      ).rejects.toThrow();
    });

    it("rejects non-admin users", async () => {
      const ctx = createRegularUserContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.testimonials.delete({ id: 1 })
      ).rejects.toThrow();
    });
  });
});

describe("blogs", () => {
  describe("blogs.list", () => {
    it("returns an array for public users (no auth required)", async () => {
      const ctx = createPublicContext();
      const caller = appRouter.createCaller(ctx);
      const result = await caller.blogs.list();
      expect(Array.isArray(result)).toBe(true);
    });
  });

  describe("blogs.create", () => {
    it("rejects unauthenticated users", async () => {
      const ctx = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.blogs.create({
          title: "My First Blog Post",
          excerpt: "This is a great blog post about product management",
          category: "Product",
          readTime: "5 min",
          link: "https://example.com/blog/1",
          publishedDate: new Date(),
        })
      ).rejects.toThrow();
    });

    it("rejects non-admin users", async () => {
      const ctx = createRegularUserContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.blogs.create({
          title: "My First Blog Post",
          excerpt: "This is a great blog post about product management",
          category: "Product",
          readTime: "5 min",
          link: "https://example.com/blog/1",
          publishedDate: new Date(),
        })
      ).rejects.toThrow();
    });

    it("rejects invalid input (title too short)", async () => {
      const ctx = createAdminContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.blogs.create({
          title: "Hi",
          excerpt: "This is a great blog post about product management",
          category: "Product",
          readTime: "5 min",
          link: "https://example.com/blog/1",
          publishedDate: new Date(),
        })
      ).rejects.toThrow();
    });

    it("rejects invalid link URL", async () => {
      const ctx = createAdminContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.blogs.create({
          title: "My First Blog Post",
          excerpt: "This is a great blog post about product management",
          category: "Product",
          readTime: "5 min",
          link: "not-a-url",
          publishedDate: new Date(),
        })
      ).rejects.toThrow();
    });
  });

  describe("blogs.delete", () => {
    it("rejects unauthenticated users", async () => {
      const ctx = createPublicContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.blogs.delete({ id: 1 })
      ).rejects.toThrow();
    });

    it("rejects non-admin users", async () => {
      const ctx = createRegularUserContext();
      const caller = appRouter.createCaller(ctx);

      await expect(
        caller.blogs.delete({ id: 1 })
      ).rejects.toThrow();
    });
  });
});

describe("auth.me", () => {
  it("returns null for unauthenticated users", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.auth.me();
    expect(result).toBeNull();
  });

  it("returns user data for authenticated users", async () => {
    const ctx = createAdminContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.auth.me();
    expect(result).toBeDefined();
    expect(result?.name).toBe("Admin User");
    expect(result?.role).toBe("admin");
  });
});
