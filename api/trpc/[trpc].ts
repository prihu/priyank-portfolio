/**
 * Vercel Serverless Handler for tRPC API
 */
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import express from "express";
import { appRouter } from "../server/routers";
import { createContext } from "../server/_core/context";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser());

// tRPC handler
app.use(
    "/api/trpc",
    createExpressMiddleware({
        router: appRouter,
        createContext,
    })
);

export default app;
