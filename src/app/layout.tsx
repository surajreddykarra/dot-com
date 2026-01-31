import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import PageCounter from '@/components/PageCounter';
import AnimatedBackground from '@/components/AnimatedBackground';
import BackToTop from '@/components/BackToTop';
import './globals.css';

export const metadata: Metadata = {
  title: 'Suraj Karra',
  description: 'Personal website and blog of Suraj Karra',
  icons: {
    icon: '/favicon-light.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AnimatedBackground />
        <div className="book-page">
          <Navigation />
          <main>{children}</main>
          <PageCounter />
        </div>
        <BackToTop />
      </body>
    </html>
  );
}
