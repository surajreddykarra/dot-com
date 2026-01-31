import { movies, watchlist } from '@/data';
import styles from './page.module.css';

export const metadata = {
  title: 'Movies | Suraj Karra',
  description: 'Films I\'ve watched and my take on them',
};

function StarRating({ rating }: { rating: number }) {
  return (
    <span className={styles.movieRating}>
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>
          ★
        </span>
      ))}
    </span>
  );
}

export default function MoviesPage() {
  return (
    <div>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Movies</h1>
        <p className={styles.pageSubtitle}>
          Films I&apos;ve watched and my take on them
        </p>
      </header>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Recent Favorites</h2>
        <div className={styles.movieGrid}>
          {movies.map((movie, index) => (
            <div 
              key={movie.id} 
              className={styles.movieCard}
              style={{ '--card-index': index } as React.CSSProperties}
            >
              <h3 className={styles.movieTitle}>{movie.title}</h3>
              <div className={styles.movieYear}>{movie.year}</div>
              <StarRating rating={movie.rating} />
              <p className={styles.movieThoughts}>{movie.thoughts}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Watchlist</h2>
        <div className={styles.movieGrid}>
          {watchlist.map((movie, index) => (
            <div 
              key={index} 
              className={styles.movieCard}
              style={{ '--card-index': index + movies.length } as React.CSSProperties}
            >
              <h3 className={styles.movieTitle}>{movie.title}</h3>
              <div className={styles.movieYear}>{movie.year}</div>
              <span className={styles.watchlistBadge}>On the list</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
