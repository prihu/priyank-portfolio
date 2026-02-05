# Priyank Garg - Senior Product Manager Portfolio

A production-grade full-stack portfolio website built to showcase your expertise in AI/LLM, Fintech, and Product Management to MAANG companies.

**Live Demo:** [Your deployed URL will go here]

## 🎯 Features

- **Professional Light Theme** - Executive presence design optimized for recruiters
- **Interactive Sections** - Hero, About, Philosophy, Experience, Case Studies, Projects, Skills, Education
- **Testimonials & Blogs** - Database-backed content management system
- **Calendly Integration** - Direct booking link for intro calls
- **GitHub Projects Showcase** - Highlights your key repositories
- **Responsive Design** - Mobile-first, works on all devices
- **Admin Panel Ready** - Add testimonials and blogs via API

## 🛠 Tech Stack

- **Frontend:** React 19, TypeScript, Tailwind CSS 4, Framer Motion
- **Backend:** Express.js, tRPC, Node.js
- **Database:** MySQL with Drizzle ORM
- **Deployment:** Railway, Render, or Vercel
- **CI/CD:** GitHub Actions

## 📋 Prerequisites

- Node.js 18+ and pnpm
- MySQL 8.0+
- GitHub account (for deployment)
- Railway/Render account (for hosting)

## 🚀 Quick Start

### Local Development

```bash
# Clone repository
git clone https://github.com/prihu/priyankgarg-portfolio-manus.git
cd priyankgarg-portfolio-manus

# Install dependencies
pnpm install

# Create .env file
cp .env.example .env

# Update DATABASE_URL with your local MySQL connection
# Example: mysql://root:password@localhost:3306/priyank_portfolio

# Create database
mysql -u root -p -e "CREATE DATABASE priyank_portfolio;"

# Run migrations
pnpm db:push

# Start development server
pnpm dev
```

Visit `http://localhost:3000`

### Build for Production

```bash
pnpm build
pnpm start
```

## 📦 Project Structure

```
priyankgarg-portfolio-manus/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and helpers
│   │   └── index.css      # Global styles
│   └── public/            # Static assets
├── server/                 # Express backend
│   ├── routers.ts         # tRPC procedure definitions
│   ├── db.ts              # Database queries
│   └── _core/             # Core server utilities
├── drizzle/               # Database schema and migrations
├── shared/                # Shared types and constants
└── package.json
```

## 🗄️ Database Schema

### Users Table
- Stores authenticated users with OAuth integration
- Fields: id, openId, name, email, role, createdAt, updatedAt

### Testimonials Table
- Client and colleague testimonials
- Fields: id, quote, author, role, company, isPublished, createdAt, updatedAt

### Blogs Table
- Blog posts and articles
- Fields: id, title, excerpt, content, category, readTime, link, publishedDate, isPublished, createdAt, updatedAt

## 🔐 Environment Variables

Create a `.env` file with:

```env
# Database
DATABASE_URL=mysql://user:password@localhost:3306/priyank_portfolio

# JWT
JWT_SECRET=your-secret-key-here

# Node
NODE_ENV=production

# App Config
VITE_APP_TITLE=Priyank Garg | Senior Product Manager Portfolio
VITE_APP_LOGO=/logo.svg
```

For production, set these in your hosting platform's dashboard.

## 🚢 Deployment

### Option 1: Railway (Recommended)

1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Add MySQL database plugin
4. Set environment variables
5. Deploy automatically

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Option 2: Render

1. Go to [render.com](https://render.com)
2. Create new Web Service from GitHub
3. Add PostgreSQL database
4. Configure build and start commands
5. Deploy

### Option 3: Vercel + Planetscale

1. Deploy frontend to Vercel
2. Use Planetscale for MySQL
3. Connect via DATABASE_URL

## 🔄 GitHub Actions

Automatic deployment on push to main branch:

1. Add `RAILWAY_TOKEN` to GitHub Secrets
2. Push to main
3. GitHub Actions automatically builds and deploys

## 📝 API Routes

### Testimonials
- `GET /api/trpc/testimonials.list` - Get all published testimonials
- `POST /api/trpc/testimonials.create` - Create testimonial (admin only)
- `PATCH /api/trpc/testimonials.update` - Update testimonial (admin only)
- `DELETE /api/trpc/testimonials.delete` - Delete testimonial (admin only)

### Blogs
- `GET /api/trpc/blogs.list` - Get all published blogs
- `POST /api/trpc/blogs.create` - Create blog (admin only)
- `PATCH /api/trpc/blogs.update` - Update blog (admin only)
- `DELETE /api/trpc/blogs.delete` - Delete blog (admin only)

## 🧪 Testing

```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test -- --watch

# Run specific test
pnpm test server/auth.logout.test.ts
```

## 🔧 Development Commands

```bash
# Start dev server
pnpm dev

# Type check
pnpm check

# Format code
pnpm format

# Build
pnpm build

# Start production server
pnpm start

# Database migrations
pnpm db:push

# Generate database types
pnpm db:generate
```

## 📚 Adding Testimonials

### Via API (Programmatic)
```typescript
const result = await trpc.testimonials.create.mutate({
  quote: "Priyank is an exceptional PM...",
  author: "John Doe",
  role: "VP Product",
  company: "Tech Company Inc"
});
```

### Via Database
```sql
INSERT INTO testimonials (quote, author, role, company, isPublished)
VALUES (
  "Priyank is an exceptional PM...",
  "John Doe",
  "VP Product",
  "Tech Company Inc",
  true
);
```

## 📝 Adding Blog Posts

### Via API
```typescript
const result = await trpc.blogs.create.mutate({
  title: "Building Scalable Lending Platforms",
  excerpt: "How we scaled from $10M to $250M...",
  category: "Product Strategy",
  readTime: "8 min read",
  link: "https://substack.com/your-post",
  publishedDate: new Date()
});
```

## 🎨 Customization

### Update Colors
Edit `client/src/index.css` to change the color palette:
- Primary: Blue-Purple (#6366f1 to #8b5cf6)
- Secondary: Teal (#14b8a6)
- Accent: Orange (#f97316)

### Update Content
Edit component files in `client/src/components/`:
- `HeroSection.tsx` - Main hero with photo
- `AboutSection.tsx` - About you
- `ExperienceSection.tsx` - Work experience
- `ProjectsSection.tsx` - GitHub projects
- `SkillsSection.tsx` - Skills and expertise

### Update Resume
Replace `client/public/Priyank_Garg_CV.pdf` with your resume

## 🐛 Troubleshooting

### Database Connection Error
```bash
# Check DATABASE_URL format
# Should be: mysql://user:password@host:port/database

# Verify MySQL is running
mysql -u root -p -e "SELECT 1;"
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Type check
pnpm check
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

## 📞 Support

For issues or questions:
1. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
2. Review GitHub Issues
3. Check platform-specific docs (Railway, Render, etc.)

## 📄 License

MIT License - feel free to use this as a template for your own portfolio

## 🙏 Acknowledgments

Built with React, Express, Tailwind CSS, and Framer Motion.

---

**Ready to impress MAANG companies?** Deploy this portfolio and start sharing your link with recruiters!
