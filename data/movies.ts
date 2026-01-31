// Movies data
export interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number; // 1-5 stars
  thoughts: string;
}

export interface WatchlistMovie {
  title: string;
  year: number;
}

export const movies: Movie[] = [
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
    thoughts: "Sorkin's dialogue at its sharpest. Surprisingly rewatchable.",
  },
];

export const watchlist: WatchlistMovie[] = [
  { title: 'Dune: Part Two', year: 2024 },
  { title: 'Poor Things', year: 2023 },
  { title: 'Past Lives', year: 2023 },
];
