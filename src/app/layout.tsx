import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import PageCounter from '@/components/PageCounter';
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
        <div className="book-page">
          <Navigation />
          <main>{children}</main>
          <PageCounter />
        </div>
      </body>
    </html>
  );
}
