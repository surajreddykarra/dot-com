import WorldMap from '@/components/WorldMap';
import styles from './page.module.css';

export const metadata = {
  title: 'Travel | Suraj Karra',
  description: 'My travel adventures and visited countries.',
};

export default function TravelPage() {
  return (
    <div className={styles.content}>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Travel Log</h1>
        <p className={styles.pageSubtitle}>
          Exploring the world, one country at a time.
        </p>
      </header>

      <WorldMap />
    </div>
  );
}
