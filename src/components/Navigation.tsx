'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blogs' },
  { href: '/movies', label: 'Movies' },
  { href: '/ideas', label: 'Ideas' },
  { href: '/travel', label: 'Travel' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [theme, setTheme] = useState('light');
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateFavicon(savedTheme);

    // Handle scroll for navbar effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Throttle scroll for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Handle tab visibility for animation pausing
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.body.classList.add('tab-hidden');
      } else {
        document.body.classList.remove('tab-hidden');
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const updateFavicon = (currentTheme: string) => {
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = currentTheme === 'dark' ? '/favicon-dark.svg' : '/favicon-light.svg';
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    updateFavicon(newTheme);
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.navHeader}>
        <Link href="/" className={styles.navTitle}>
          Suraj Karra
        </Link>
        {mounted && (
          <button 
            onClick={toggleTheme} 
            className={styles.themeToggle}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        )}
      </div>
      <div className={styles.navLinks}>
        {navItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ''}`}
            style={{ '--animation-delay': `${index * 0.05}s` } as React.CSSProperties}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
