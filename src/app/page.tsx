'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimations';
import { timeline, projects, socials, quickFacts } from '@/data';
import styles from './page.module.css';

// Social icons (kept in component since JSX can't be in data files)
const socialIcons: Record<string, JSX.Element> = {
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  Twitter: (
    <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
};

export default function Home() {
  const heroRef = useScrollAnimation<HTMLElement>('fade-up');
  const bioRef = useScrollAnimation<HTMLElement>('bounce-in');
  const timelineRef = useScrollAnimation<HTMLElement>('fade-up');
  const projectsRef = useScrollAnimation<HTMLElement>('slide-left');
  const exploreRef = useScrollAnimation<HTMLElement>('slide-left');
  const factsRef = useScrollAnimation<HTMLElement>('fade-up');

  return (
    <div>
      {/* Hero Section with Profile */}
      <section ref={heroRef} className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Hello, I&apos;m Suraj</h1>
            <p className={styles.heroSubtitle}>
              Software Engineer · Thinker · Creator
            </p>
            {/* Social Links */}
            <div className={styles.socialLinks}>
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  title={social.name}
                >
                  {socialIcons[social.name]}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.profilePhoto}>
            <Image
              src="/profile.svg"
              alt="Suraj Karra"
              width={150}
              height={150}
              className={styles.profileImage}
              priority
            />
          </div>
        </div>
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

      {/* Timeline Section */}
      <section ref={timelineRef} className={styles.section}>
        <h2 className={styles.sectionTitle}>Journey</h2>
        <div className={styles.timeline}>
          {timeline.map((item, index) => (
            <div 
              key={index} 
              className={`${styles.timelineItem} ${styles[item.type]}`}
              style={{ '--item-index': index } as React.CSSProperties}
            >
              <div className={styles.timelineMarker}>
                {item.type === 'work' ? (
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                    <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                  </svg>
                )}
              </div>
              <div className={styles.timelineContent}>
                <span className={styles.timelineYear}>{item.year}</span>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineOrg}>{item.organization}</p>
                <p className={styles.timelineDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className={styles.section}>
        <h2 className={styles.sectionTitle}>Hobby Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectCard}
              style={{ '--card-index': index } as React.CSSProperties}
            >
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDesc}>{project.description}</p>
              <span className={styles.projectLink}>
                View Project →
              </span>
            </a>
          ))}
        </div>
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
          {quickFacts.map((fact, index) => (
            <li key={index} className={`stagger-${index + 1}`}>{fact}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
