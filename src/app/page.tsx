'use client';

import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';
import styles from './page.module.css';

export default function Home() {
  const heroRef = useScrollAnimation<HTMLElement>('fade-up');
  const bioRef = useScrollAnimation<HTMLElement>('bounce-in');
  const exploreRef = useScrollAnimation<HTMLElement>('slide-left');
  const factsRef = useScrollAnimation<HTMLElement>('fade-up');

  return (
    <div>
      {/* Hero Section */}
      <section ref={heroRef} className={styles.hero}>
        <h1 className={styles.heroTitle}>Hello, I&apos;m Suraj</h1>
        <p className={styles.heroSubtitle}>
          Software Engineer · Thinker · Creator
        </p>
      </section>

      {/* Bio Section */}
      <section ref={bioRef} className={`${styles.bio} animate-float`}>
        <p className={styles.bioText}>
          Welcome to my corner of the internet. I&apos;m a software engineer 
          who loves building things that make a difference. When I&apos;m not coding, 
          you&apos;ll find me watching movies, exploring new ideas, or writing about 
          the things I&apos;ve learned along the way.
        </p>
        <p className={styles.bioText} style={{ marginTop: '1rem', marginBottom: 0 }}>
          This is where I collect my thoughts, share what I&apos;m working on, 
          and document the journey.
        </p>
      </section>

      {/* Quick Links */}
      <section ref={exploreRef} className={styles.section}>
        <h2 className={styles.sectionTitle}>Explore</h2>
        <div className={styles.quickLinks}>
          <Link href="/blog" className={`${styles.quickLink} stagger-1`}>
            <div className={styles.quickLinkTitle}>Blog</div>
            <div className={styles.quickLinkDesc}>
              Thoughts on tech, life, and everything in between
            </div>
          </Link>
          <Link href="/movies" className={`${styles.quickLink} stagger-2`}>
            <div className={styles.quickLinkTitle}>Movies</div>
            <div className={styles.quickLinkDesc}>
              Films I&apos;ve watched and my take on them
            </div>
          </Link>
          <Link href="/ideas" className={`${styles.quickLink} stagger-3`}>
            <div className={styles.quickLinkTitle}>Ideas</div>
            <div className={styles.quickLinkDesc}>
              Random sparks and shower thoughts
            </div>
          </Link>
        </div>
      </section>

      {/* Quick Facts */}
      <section ref={factsRef} className={styles.section}>
        <h2 className={styles.sectionTitle}>Quick Facts</h2>
        <ul className={styles.funFacts}>
          <li className="stagger-1">Currently exploring the world of AI and machine learning</li>
          <li className="stagger-2">Big fan of clean code and simple solutions</li>
          <li className="stagger-3">Believe that the best documentation is the one you actually read</li>
          <li className="stagger-4">Coffee enthusiast (okay, maybe a bit more than enthusiast)</li>
        </ul>
      </section>
    </div>
  );
}
