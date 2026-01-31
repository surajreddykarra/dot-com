'use client';

import { useEffect, useRef, RefObject } from 'react';

type AnimationType = 'fade-up' | 'bounce-in' | 'slide-left' | 'pop-in' | 'float';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement>(
  animationType: AnimationType = 'fade-up',
  options: UseScrollAnimationOptions = {}
): RefObject<T> {
  const ref = useRef<T>(null);
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      element.classList.add('animate-visible');
      return;
    }

    // Add initial animation class
    element.classList.add(`animate-${animationType}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove('animate-visible');
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animationType, threshold, rootMargin, triggerOnce]);

  return ref;
}

// Hook to animate multiple elements with staggered delays
export function useStaggeredAnimation(
  containerSelector: string,
  itemSelector: string,
  animationType: AnimationType = 'fade-up',
  staggerDelay: number = 0.1
) {
  useEffect(() => {
    const container = document.querySelector(containerSelector);
    if (!container) return;

    const items = container.querySelectorAll(itemSelector);
    
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    items.forEach((item, index) => {
      const element = item as HTMLElement;
      
      if (prefersReducedMotion) {
        element.classList.add('animate-visible');
        return;
      }
      
      element.classList.add(`animate-${animationType}`);
      element.style.setProperty('--animation-delay', `${index * staggerDelay}s`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [containerSelector, itemSelector, animationType, staggerDelay]);
}

// Simple hook to add animation class to any element
export function useAnimateOnMount(animationType: AnimationType = 'fade-up') {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      element.classList.add(`animate-${animationType}`);
      // Trigger animation after mount
      requestAnimationFrame(() => {
        element.classList.add('animate-visible');
      });
    }
  }, [animationType]);

  return ref;
}
