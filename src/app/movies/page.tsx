import styles from './page.module.css';

export const metadata = {
  title: 'Movies | Suraj Karra',
  description: 'Films I\'ve watched and my take on them',
};

// Movie data - can be moved to a separate data file later
const movies = [
  {
    id: 1,
    title: 'Inception',
    year: 2010,
    rating: 5,
    thoughts: 'A mind-bending masterpiece. Every rewatch reveals something new.',
  },
  {
    id: 2,
    title: 'The Grand Budapest Hotel',
    year: 2014,
    rating: 5,
    thoughts: 'Wes Anderson at his finest. Pure visual poetry with heart.',
  },
  {
    id: 3,
    title: 'Parasite',
    year: 2019,
    rating: 5,
    thoughts: 'Genre-defying brilliance. The less you know going in, the better.',
  },
  {
    id: 4,
    title: 'Interstellar',
    year: 2014,
    rating: 4,
    thoughts: 'Ambitious sci-fi that made me cry. The docking scene is cinema.',
  },
  {
    id: 5,
    title: 'Spirited Away',
    year: 2001,
    rating: 5,
    thoughts: 'Studio Ghibli magic. Animation that feels like a warm hug.',
  },
  {
    id: 6,
    title: 'The Social Network',
    year: 2010,
    rating: 4,
    thoughts: 'Sorkin\'s dialogue at its sharpest. Surprisingly rewatchable.',
  },
];

const watchlist = [
  { title: 'Dune: Part Two', year: 2024 },
  { title: 'Poor Things', year: 2023 },
  { title: 'Past Lives', year: 2023 },
];

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
          {movies.map((movie) => (
            <div key={movie.id} className={styles.movieCard}>
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
            <div key={index} className={styles.movieCard}>
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
