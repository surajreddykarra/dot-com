import { getAllBlogPosts } from '@/lib/blog';
import BlogCard from '@/components/BlogCard';
import styles from './page.module.css';

export const metadata = {
  title: 'Blog | Suraj Karra',
  description: 'Thoughts on tech, life, and everything in between',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Blog</h1>
        <p className={styles.pageSubtitle}>
          Thoughts on tech, life, and everything in between
        </p>
      </header>

      {posts.length > 0 ? (
        <div className={styles.blogList}>
          {posts.map((post) => (
            <BlogCard
              key={`${post.year}-${post.month}-${post.slug}`}
              title={post.title}
              date={post.date}
              year={post.year}
              month={post.month}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <h3>No posts yet</h3>
          <p>Check back soon for new content!</p>
        </div>
      )}
    </div>
  );
}
