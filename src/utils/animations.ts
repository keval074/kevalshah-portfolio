import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for reveal animations using IntersectionObserver
 * Triggers animations when elements enter the viewport
 * Respects user's prefers-reduced-motion preference
 * 
 * @param threshold - Percentage of element visibility required to trigger (0-1)
 * @returns Object with ref to attach to element and isVisible state
 */
export function useRevealAnimation(threshold: number = 0.1) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // If user prefers reduced motion, make element immediately visible without animation
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    // Create IntersectionObserver to detect when element enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, stop observing (animation only triggers once)
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );

    observer.observe(element);

    // Cleanup observer on unmount
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return { ref: elementRef, isVisible };
}
