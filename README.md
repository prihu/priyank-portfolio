# Priyank Garg — Product Manager Portfolio

A full-stack portfolio website showcasing 7+ years of experience scaling fintech products, building AI-powered platforms, and driving revenue growth across lending, telesales, and customer service domains.

**Live:** [priyankgarg.com](https://priyankgarg.com)

-----

## What This Site Covers

The portfolio is structured as a narrative — not a resume dump. Each section builds on a “Revenue Engine Builder” arc:

- **Hero** — One-line positioning with Calendly booking link for intro calls
- **About** — Career story: from BITS Pilani to scaling $250M+ lending infrastructure
- **How I Think** — Operating principles with real examples (high agency, speed, chaos→structure)
- **Experience** — IndusInd Bank (DVP Product, 10M+ customers), Prefr/CRED ($250M loan volume), NeoGrowth (6x loan volume growth)
- **Case Studies** — Challenge → Action → Result deep dives on key initiatives
- **Projects** — GitHub repos with a PM lens (AI Phone Screening, Fresh Produce AI, this portfolio)
- **Currently Exploring** — What I am looking for in my next role
- **Education** — MBA from IMT Ghaziabad, B.E. from BITS Pilani
- **Testimonials** — Database-backed, managed via admin panel
- **Blogs** — Auto-synced from [ProductOped Substack](https://productoped.substack.com) with visibility controls

## Tech Stack

|Layer        |Technology                                                |
|-------------|----------------------------------------------------------|
|Frontend     |React 19, TypeScript, Tailwind CSS 4, Framer Motion       |
|Backend      |Express.js, tRPC, Vercel Serverless Functions             |
|Database     |Supabase (PostgreSQL) for testimonials and blog visibility|
|Content      |Substack RSS feed integration with server-side caching    |
|UI Components|Radix UI, shadcn/ui, Lucide icons                         |
|Deployment   |Vercel (auto-deploy from `main`)                          |
|Testing      |Vitest                                                    |

## Key Technical Decisions

- **Supabase over raw MySQL** — Moved from Drizzle/MySQL to Supabase for simpler auth, real-time capabilities, and free-tier hosting. Legacy Drizzle schema retained for local dev.
- **Substack RSS as blog CMS** — Blog posts are fetched live from Substack’s RSS feed with a 5-minute server cache. Supabase manages per-post visibility toggles so the admin can hide/show posts without touching Substack.
- **Vercel serverless API** — Separate serverless handlers under `/api/` for testimonials, blogs, and admin auth — no long-running Express server needed in production.
- **Admin panel with password auth** — Lightweight admin dashboard at `/admin` for managing testimonials and blog visibility. JWT-based session with cookie auth.

## Project Structure

```
priyank-portfolio/
├── client/                  # React SPA
│   ├── src/
│   │   ├── components/      # Section components (Hero, About, Experience, etc.)
│   │   ├── pages/           # Home, Admin Dashboard, Admin Login, NotFound
│   │   ├── contexts/        # Theme context
│   │   ├── hooks/           # Custom React hooks
│   │   └── lib/             # API client, tRPC setup, utilities
│   └── public/              # Static assets (resume PDF, images)
├── server/                  # Express + tRPC backend
│   ├── routers.ts           # API route definitions
│   ├── storage.ts           # Data access layer
│   └── _core/               # Server bootstrap, auth, middleware
├── api/                     # Vercel serverless function handlers
│   ├── testimonials/
│   ├── blogs/
│   └── admin/
├── shared/                  # Shared between client and server
│   ├── supabase.ts          # Supabase client + CRUD operations
│   ├── substack.ts          # RSS feed parser + caching
│   └── types.ts
├── drizzle/                 # Legacy MySQL schema and migrations
└── vercel.json              # Vercel routing and build config
```

## Running Locally

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed setup instructions, environment variables, API routes, and development commands.

Quick version:

```bash
git clone https://github.com/prihu/priyank-portfolio.git
cd priyank-portfolio
pnpm install
cp .env.example .env    # Fill in Supabase credentials
pnpm dev                # http://localhost:3000
```

## Links

- **Portfolio:** [priyankgarg.com](https://priyankgarg.com)
- **LinkedIn:** [linkedin.com/in/gargpriyank](https://www.linkedin.com/in/gargpriyank)
- **Substack:** [productoped.substack.com](https://productoped.substack.com)
- **GitHub:** [github.com/prihu](https://github.com/prihu)
- **Email:** priyankgarg28@gmail.com

## License

MIT