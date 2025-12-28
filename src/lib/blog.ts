import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';

const contentDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  year: string;
  month: string;
  content: string;
  excerpt?: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  year: string;
  month: string;
  excerpt?: string;
}

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllBlogPosts(): BlogPostMeta[] {
  const posts: BlogPostMeta[] = [];

  // Check if content directory exists
  if (!fs.existsSync(contentDirectory)) {
    return posts;
  }

  // Traverse year folders
  const years = fs.readdirSync(contentDirectory).filter((item) => {
    const itemPath = path.join(contentDirectory, item);
    return fs.statSync(itemPath).isDirectory();
  });

  for (const year of years) {
    const yearPath = path.join(contentDirectory, year);
    const months = fs.readdirSync(yearPath).filter((item) => {
      const itemPath = path.join(yearPath, item);
      return fs.statSync(itemPath).isDirectory();
    });

    for (const month of months) {
      const monthPath = path.join(yearPath, month);
      const files = fs.readdirSync(monthPath).filter((file) =>
        file.endsWith('.md')
      );

      for (const file of files) {
        const filePath = path.join(monthPath, file);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        const slug = file.replace(/\.md$/, '');
        
        // Extract excerpt (first paragraph or first 150 chars)
        const excerpt = content
          .split('\n\n')[0]
          ?.replace(/[#*`]/g, '')
          .trim()
          .slice(0, 150) + '...';

        posts.push({
          slug,
          title: data.title || slug,
          date: data.date || `${year}-${month}-01`,
          year,
          month,
          excerpt,
        });
      }
    }
  }

  // Sort by date, newest first
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a single blog post by year, month, and slug
 */
export async function getBlogPost(
  year: string,
  month: string,
  slug: string
): Promise<BlogPost | null> {
  const filePath = path.join(contentDirectory, year, month, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // Process markdown to HTML
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(content);

  return {
    slug,
    title: data.title || slug,
    date: data.date || `${year}-${month}-01`,
    year,
    month,
    content: processedContent.toString(),
  };
}

/**
 * Get all possible blog paths for static generation
 */
export function getAllBlogPaths(): { year: string; month: string; slug: string }[] {
  const paths: { year: string; month: string; slug: string }[] = [];

  if (!fs.existsSync(contentDirectory)) {
    return paths;
  }

  const years = fs.readdirSync(contentDirectory).filter((item) => {
    const itemPath = path.join(contentDirectory, item);
    return fs.statSync(itemPath).isDirectory();
  });

  for (const year of years) {
    const yearPath = path.join(contentDirectory, year);
    const months = fs.readdirSync(yearPath).filter((item) => {
      const itemPath = path.join(yearPath, item);
      return fs.statSync(itemPath).isDirectory();
    });

    for (const month of months) {
      const monthPath = path.join(yearPath, month);
      const files = fs.readdirSync(monthPath).filter((file) =>
        file.endsWith('.md')
      );

      for (const file of files) {
        const slug = file.replace(/\.md$/, '');
        paths.push({ year, month, slug });
      }
    }
  }

  return paths;
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
