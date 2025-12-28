---
title: "Building a Personal Website with Next.js"
date: "2025-01-10"
---

# Building a Personal Website with Next.js

I recently rebuilt my personal website using **Next.js** with the new App Router, and I wanted to share what I learned along the way.

## Why Next.js?

There are countless ways to build a website in 2025, but here's why I chose Next.js:

- **Static Generation**: Perfect for blogs—pages are pre-rendered at build time
- **File-based Routing**: The folder structure *is* the routing structure
- **TypeScript Support**: First-class TypeScript integration out of the box
- **Easy Deployment**: Works seamlessly with Vercel and Cloudflare Pages

## The Tech Stack

Here's what powers this site:

| Technology | Purpose |
|------------|---------|
| Next.js 14 | Framework |
| TypeScript | Type safety |
| CSS Modules | Styling |
| Markdown | Blog content |
| gray-matter | Frontmatter parsing |
| remark/rehype | Markdown processing |

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   ├── blog/
│   │   ├── page.tsx      # Blog list
│   │   └── [year]/[month]/[slug]/
│   │       └── page.tsx  # Blog detail
│   ├── movies/
│   └── ideas/
├── components/
│   └── Navigation.tsx
└── lib/
    └── blog.ts           # Blog utilities

content/
└── blog/
    └── 2025/
        └── 01/
            └── post.md
```

## Key Learnings

### 1. Static Generation is Powerful

With `generateStaticParams()`, Next.js pre-renders all your blog posts at build time:

```typescript
export async function generateStaticParams() {
  const paths = getAllBlogPaths();
  return paths;
}
```

This means your blog loads **instantly**—no waiting for server responses.

### 2. Markdown + Frontmatter = 💪

Using frontmatter in Markdown files keeps everything simple:

```markdown
---
title: "My Post Title"
date: "2025-01-10"
---

Your content here...
```

### 3. CSS Modules Keep Styles Scoped

No more worrying about class name collisions:

```css
/* Button.module.css */
.button {
  background: yellow;
}
```

```tsx
import styles from './Button.module.css';

<button className={styles.button}>Click me</button>
```

## What's Next?

Some features I'm planning to add:

- [ ] RSS feed generation
- [ ] Dark mode toggle
- [ ] Search functionality
- [ ] Comments system

---

Building your own website is a great learning experience. Even if there are easier options, there's something satisfying about having full control over your corner of the internet.

**Happy coding!** 🚀
