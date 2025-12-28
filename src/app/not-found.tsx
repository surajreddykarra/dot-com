import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <div className={styles.errorCode}>404</div>
      <h1 className={styles.title}>Page Not Found</h1>
      <p className={styles.message}>
        Oops! Looks like this page got lost between the chapters. 
        Let&apos;s get you back to familiar territory.
      </p>
      <Link href="/" className={styles.homeLink}>
        ← Back to Home
      </Link>
    </div>
  );
}
