# Deployment Guide

This portfolio is a full-stack application built with React, Express, and MySQL. It can be deployed on several free or low-cost platforms.

## Recommended Hosting Options

### 1. **Railway.app** (Recommended - Free Tier)
Railway offers a generous free tier with $5/month credits and supports full-stack apps with databases.

**Pros:**
- Free tier with $5/month credits
- Built-in MySQL database support
- GitHub integration for auto-deploy
- Environment variables management UI
- Easy scaling

**Steps:**
1. Go to [railway.app](https://railway.app) and sign up with GitHub
2. Create a new project from your GitHub repository
3. Add MySQL database plugin
4. Configure environment variables in Railway dashboard
5. Deploy automatically on push to main branch

### 2. **Render.com** (Alternative)
Render offers free tier with limitations but good for production apps.

**Pros:**
- Free tier available
- PostgreSQL/MySQL support
- GitHub auto-deploy
- Custom domains

**Cons:**
- Spins down after 15 minutes of inactivity on free tier

**Steps:**
1. Go to [render.com](https://render.com) and sign up with GitHub
2. Create new Web Service from repository
3. Add PostgreSQL database
4. Set build and start commands
5. Deploy

### 3. **Vercel + Planetscale** (For Next.js-like setup)
If you want to migrate to Next.js later, this combo is excellent.

**Pros:**
- Vercel free tier for frontend
- Planetscale free tier for MySQL
- Excellent DX

**Cons:**
- Requires code changes for Next.js
- More complex setup

## Environment Variables Required

Create a `.env` file locally (never commit this) with:

```env
DATABASE_URL=mysql://user:password@host:3306/database_name
JWT_SECRET=your-secret-key-here
NODE_ENV=production
VITE_APP_TITLE=Priyank Garg | Senior Product Manager Portfolio
VITE_APP_LOGO=/logo.svg
```

For production, set these in your hosting platform's environment variables dashboard.

## Build & Start Commands

**Build:**
```bash
pnpm install
pnpm build
```

**Start:**
```bash
pnpm start
```

**Development:**
```bash
pnpm dev
```

## Database Setup

### Local Development
```bash
# Install MySQL locally
# Create database
mysql -u root -p -e "CREATE DATABASE priyank_portfolio;"

# Set DATABASE_URL in .env
DATABASE_URL=mysql://root:password@localhost:3306/priyank_portfolio

# Run migrations
pnpm db:push
```

### Production (Railway/Render)
1. Platform automatically creates database
2. Get connection string from dashboard
3. Set `DATABASE_URL` environment variable
4. Migrations run automatically on first deploy (or manually via `pnpm db:push`)

## GitHub Actions (Auto-Deploy)

The `.github/workflows/deploy.yml` file enables automatic deployment on push to main branch.

**Features:**
- Runs tests on every push
- Builds the project
- Deploys to Railway (or your chosen platform)

**Setup:**
1. Add `RAILWAY_TOKEN` to GitHub Secrets
   - Go to Settings → Secrets and variables → Actions
   - Add `RAILWAY_TOKEN` from Railway dashboard
2. Push to main branch
3. GitHub Actions automatically deploys

## Local Development Setup

```bash
# Clone repository
git clone https://github.com/prihu/priyankgarg-portfolio-manus.git
cd priyankgarg-portfolio-manus

# Install dependencies
pnpm install

# Create .env file (copy from .env.example)
cp .env.example .env

# Update DATABASE_URL with your local MySQL connection

# Run migrations
pnpm db:push

# Start development server
pnpm dev
```

Visit `http://localhost:3000`

## Troubleshooting

### Database Connection Issues
- Verify `DATABASE_URL` format: `mysql://user:password@host:port/database`
- Check database credentials
- Ensure database server is running

### Build Failures
- Clear node_modules: `rm -rf node_modules && pnpm install`
- Check for TypeScript errors: `pnpm check`
- Review build logs in hosting platform dashboard

### Port Issues
- The app uses port 3000 by default
- Railway/Render automatically assign ports
- Don't hardcode ports in production code

## Monitoring & Logs

**Railway:**
- Logs tab shows real-time logs
- Metrics tab shows CPU, memory, bandwidth

**Render:**
- Logs tab shows deployment and runtime logs
- Metrics available in dashboard

## Custom Domain

Both Railway and Render support custom domains:
1. Point your domain DNS to platform's nameservers
2. Add domain in platform dashboard
3. SSL certificate auto-generated

## Scaling

**Railway:** Upgrade plan for more resources
**Render:** Upgrade instance type for more CPU/RAM

## Cost Estimation

- **Railway:** Free tier ($5/month credits) + paid as you grow
- **Render:** Free tier (limited), $7/month for production
- **Database:** Usually included in free tier

## Questions?

Refer to platform documentation:
- [Railway Docs](https://docs.railway.app)
- [Render Docs](https://render.com/docs)
