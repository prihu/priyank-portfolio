import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure, adminProcedure } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  testimonials: router({
    list: publicProcedure.query(() => db.getAllTestimonials()),
    create: adminProcedure
      .input(z.object({
        quote: z.string().min(10),
        author: z.string().min(1),
        role: z.string().min(1),
        company: z.string().min(1),
      }))
      .mutation(({ input }) => db.createTestimonial(input)),
    update: adminProcedure
      .input(z.object({
        id: z.number(),
        quote: z.string().optional(),
        author: z.string().optional(),
        role: z.string().optional(),
        company: z.string().optional(),
        isPublished: z.boolean().optional(),
      }))
      .mutation(({ input }) => {
        const { id, ...data } = input;
        return db.updateTestimonial(id, data);
      }),
    delete: adminProcedure
      .input(z.object({ id: z.number() }))
      .mutation(({ input }) => db.deleteTestimonial(input.id)),
  }),

  blogs: router({
    list: publicProcedure.query(() => db.getAllBlogs()),
    create: adminProcedure
      .input(z.object({
        title: z.string().min(5),
        excerpt: z.string().min(10),
        content: z.string().optional(),
        category: z.string().min(1),
        readTime: z.string(),
        link: z.string().url(),
        publishedDate: z.date(),
      }))
      .mutation(({ input }) => db.createBlog(input)),
    update: adminProcedure
      .input(z.object({
        id: z.number(),
        title: z.string().optional(),
        excerpt: z.string().optional(),
        content: z.string().optional(),
        category: z.string().optional(),
        readTime: z.string().optional(),
        link: z.string().url().optional(),
        publishedDate: z.date().optional(),
        isPublished: z.boolean().optional(),
      }))
      .mutation(({ input }) => {
        const { id, ...data } = input;
        return db.updateBlog(id, data);
      }),
    delete: adminProcedure
      .input(z.object({ id: z.number() }))
      .mutation(({ input }) => db.deleteBlog(input.id)),
  }),
});

export type AppRouter = typeof appRouter;
