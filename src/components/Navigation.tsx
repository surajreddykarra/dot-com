'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blogs' },
  { href: '/movies', label: 'Movies' },
  { href: '/ideas', label: 'Ideas' },
];

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.navTitle}>
        Suraj Karra
      </Link>
      <div className={styles.navLinks}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.navLink} ${isActive(item.href) ? styles.navLinkActive : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
