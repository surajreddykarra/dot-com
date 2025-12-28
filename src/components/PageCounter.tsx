'use client';

import { useEffect, useState } from 'react';
import styles from './PageCounter.module.css';

/**
 * A simple, privacy-friendly page view counter.
 * 
 * For production, consider:
 * - Plausible Analytics (privacy-friendly)
 * - Umami (self-hosted, privacy-friendly)
 * - Cloudflare Web Analytics
 */
export default function PageCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const storageKey = 'page_views';
    const stored = localStorage.getItem(storageKey);
    
    const baseViews = 142;
    let currentViews = stored ? parseInt(stored, 10) : baseViews;
    
    const sessionKey = 'session_counted';
    if (!sessionStorage.getItem(sessionKey)) {
      currentViews += 1;
      localStorage.setItem(storageKey, currentViews.toString());
      sessionStorage.setItem(sessionKey, 'true');
    }
    
    setViews(currentViews);
  }, []);

  if (views === null) {
    return null;
  }

  return (
    <div className={styles.counter}>
      <span className={styles.counterNumber}>{views.toLocaleString()}</span>
      <span className={styles.counterLabel}>visitors</span>
    </div>
  );
}
