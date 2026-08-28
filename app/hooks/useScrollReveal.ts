import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const animatedEls = document.querySelectorAll('[data-animate]');
    if (!animatedEls.length) return;

    if (!window.IntersectionObserver || prefersReducedMotion) {
      animatedEls.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.05,
      }
    );

    animatedEls.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}
