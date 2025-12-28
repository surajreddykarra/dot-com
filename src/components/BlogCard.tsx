import Link from 'next/link';
import { formatDate } from '@/lib/blog';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  title: string;
  date: string;
  year: string;
  month: string;
  slug: string;
  excerpt?: string;
}

export default function BlogCard({ title, date, year, month, slug, excerpt }: BlogCardProps) {
  const href = `/blog/${year}/${month}/${slug}`;

  return (
    <Link href={href} className={styles.blogCard}>
      <h3 className={styles.blogTitle}>{title}</h3>
      <div className={styles.blogMeta}>{formatDate(date)}</div>
      {excerpt && <p className={styles.blogExcerpt}>{excerpt}</p>}
    </Link>
  );
}
