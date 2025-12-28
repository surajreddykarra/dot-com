import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBlogPost, getAllBlogPaths, formatDate } from '@/lib/blog';
import styles from './page.module.css';

interface BlogDetailPageProps {
  params: Promise<{
    year: string;
    month: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const paths = getAllBlogPaths();
  return paths;
}

export async function generateMetadata({ params }: BlogDetailPageProps) {
  const { year, month, slug } = await params;
  const post = await getBlogPost(year, month, slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Suraj Karra',
    };
  }

  return {
    title: `${post.title} | Suraj Karra`,
    description: `Read "${post.title}" on Suraj Karra's blog`,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { year, month, slug } = await params;
  const post = await getBlogPost(year, month, slug);

  if (!post) {
    notFound();
  }

  return (
    <article className={styles.article}>
      <Link href="/blog" className={styles.backLink}>
        Back to Blog
      </Link>

      <header className={styles.articleHeader}>
        <h1 className={styles.articleTitle}>{post.title}</h1>
        <div className={styles.articleMeta}>
          <span className={styles.articleDate}>{formatDate(post.date)}</span>
        </div>
      </header>

      <div
        className={styles.articleContent}
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
