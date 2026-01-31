'use client';

import { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

export default function AnimatedBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (backgroundRef.current) {
        const scrollY = window.scrollY;
        // Parallax effect - background moves at 0.3x scroll speed
        backgroundRef.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    };

    // Throttle scroll handler for performance
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
    
    // Pause animations when tab is hidden
    const handleVisibilityChange = () => {
      if (backgroundRef.current) {
        if (document.hidden) {
          backgroundRef.current.style.animationPlayState = 'paused';
        } else {
          backgroundRef.current.style.animationPlayState = 'running';
        }
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className={styles.backgroundContainer} aria-hidden="true">
      <div ref={backgroundRef} className={styles.dotPattern}>
        {/* SVG Dot Matrix Pattern */}
        <svg className={styles.dotSvg} xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Radial gradient mask - denser at center, fades outward */}
            <radialGradient id="dotFade" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="50%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="fadeMask">
              <rect width="100%" height="100%" fill="url(#dotFade)" />
            </mask>
            {/* Dot pattern */}
            <pattern id="dotGrid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle className={styles.dot} cx="12" cy="12" r="1.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotGrid)" mask="url(#fadeMask)" />
        </svg>
      </div>
      {/* Ripple overlay for wave animation */}
      <div className={styles.rippleOverlay}></div>
    </div>
  );
}
