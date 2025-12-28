# Suraj's Notebook 📖

A fast, static-first personal website with a Markdown-based blog system. Built with Next.js (App Router) and TypeScript.

## 🎨 Design

The site features a unique **2D animated book** aesthetic with:
- Dotted patterns and paper textures
- Yellow/white color scheme
- 3D box effects on blog cards (Windows XP inspired)
- Animated navigation tabs
- Book spine and page corner fold effects

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

## 📁 Project Structure

```
surajkarra-com/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Home page
│   │   ├── layout.tsx         # Root layout
│   │   ├── globals.css        # Global styles
│   │   ├── blog/              # Blog pages
│   │   │   ├── page.tsx       # Blog list
│   │   │   └── [year]/[month]/[slug]/
│   │   │       └── page.tsx   # Blog detail
│   │   ├── movies/            # Movies page
│   │   └── ideas/             # Ideas page
│   ├── components/            # Reusable components
│   │   ├── Navigation.tsx
│   │   ├── BlogCard.tsx
│   │   └── PageCounter.tsx
│   └── lib/
│       └── blog.ts            # Blog utilities
├── content/
│   └── blog/                  # Markdown blog posts
│       └── YYYY/
│           └── MM/
│               └── post-slug.md
└── package.json
```

## ✍️ Adding a New Blog Post

1. Create a new Markdown file in `content/blog/YYYY/MM/`:

```
content/blog/2025/02/my-new-post.md
```

2. Add frontmatter at the top:

```markdown
---
title: "My New Post Title"
date: "2025-02-15"
---

Your content here...
```

3. Write your content using standard Markdown:
   - Headings (`#`, `##`, `###`)
   - Bold/italics (`**bold**`, `*italic*`)
   - Code blocks with syntax highlighting
   - Images
   - Blockquotes
   - Lists
   - Tables

4. Run `npm run build` to generate the static page

The post will automatically appear in the blog list, sorted by date (newest first).

## 📝 Supported Markdown Features

- **Headings**: H1-H6
- **Formatting**: Bold, italic, strikethrough
- **Code**: Inline code and fenced code blocks with syntax highlighting
- **Lists**: Ordered and unordered
- **Blockquotes**: For callouts and quotes
- **Tables**: GFM-style tables
- **Images**: With automatic styling
- **Links**: Internal and external
- **Horizontal rules**: Section dividers

## 🔧 Configuration

### Static Export

The site is configured for static export (`output: 'export'` in `next.config.js`), making it perfect for:
- Vercel
- Cloudflare Pages
- Netlify
- GitHub Pages
- Any static hosting

### Customization

- **Colors**: Edit CSS custom properties in `src/app/globals.css`
- **Navigation**: Edit `navItems` in `src/components/Navigation.tsx`
- **Movies**: Edit the `movies` array in `src/app/movies/page.tsx`
- **Ideas**: Edit the `ideas` array in `src/app/ideas/page.tsx`

## 📊 Analytics

The site includes a lightweight, privacy-friendly page view counter. For production, consider replacing with:
- [Plausible](https://plausible.io/) - Privacy-friendly analytics
- [Umami](https://umami.is/) - Self-hosted analytics
- Cloudflare Web Analytics - Free and privacy-friendly

## 🚢 Deployment

### Vercel

```bash
npm install -g vercel
vercel
```

### Cloudflare Pages

1. Push to GitHub
2. Connect repository in Cloudflare Pages dashboard
3. Build command: `npm run build`
4. Output directory: `out`

## 📄 License

MIT
