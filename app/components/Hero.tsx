'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // 1. Entrance Animation
    const heroEls = document.querySelectorAll('[data-hero]');
    const delays: Record<string, number> = {
      '1': 120,
      '2': 220,
      '3': 320,
      '4': 420,
      '5': 520,
      '6': 600,
    };

    if (prefersReducedMotion) {
      heroEls.forEach((el) => el.classList.add('hero-visible'));
    } else {
      heroEls.forEach((el) => {
        const tier = el.getAttribute('data-hero') || '0';
        const delay = delays[tier] || 0;
        setTimeout(() => el.classList.add('hero-visible'), delay);
      });
    }

    // 2. Parallax Scroll
    if (!prefersReducedMotion) {
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            setScrollY(window.scrollY);
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const heroH = typeof window !== 'undefined' ? window.innerHeight : 800;
  const ratio = scrollY / heroH;
  
  // Calculate parallax styles (only apply if scrolled within range)
  const isScrollingPast = scrollY > heroH * 1.2;
  
  const bgStyle = !isScrollingPast ? {
    transform: `translate3d(0, ${scrollY * 0.28}px, 0) scale(${1 + ratio * 0.04})`
  } : {};
  
  const contentStyle = !isScrollingPast ? {
    transform: `translate3d(0, ${-scrollY * 0.12}px, 0)`,
    opacity: Math.max(0, 1 - ratio * 1.6)
  } : {};

  const footerStyle = !isScrollingPast ? {
    opacity: Math.max(0, 1 - ratio * 2)
  } : {};

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-bg" aria-hidden="true" style={bgStyle}></div>

      <div className="hero-content" style={contentStyle}>
        <h1 className="hero-h1" aria-label="REMAP 3.0">
          <span className="hero-h1-line" data-hero="1">REMAP</span>
          <em className="hero-h1-line" data-hero="2">3.0</em>
        </h1>

        <p className="hero-statement" data-hero="3">An overnight hardware experience for B.Tech students.</p>

        <div className="hero-actions" data-hero="4">
          <a href="#register" className="btn btn-primary">
            Get Started <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
          <a href="#schedule" className="btn btn-ghost">
            See the schedule <span className="btn-arrow" aria-hidden="true">↓</span>
          </a>
        </div>

        <p className="hero-note" data-hero="5">No prior hardware experience needed.</p>
      </div>

      <div className="hero-footer" data-hero="6" style={footerStyle}>
        <div className="hero-footer-left">
          <span>REMAP</span>
          <span className="hero-footer-sep">/</span>
          <span>AN OVERNIGHT HARDWARE EXPERIENCE</span>
        </div>
        <div className="hero-footer-right">
          <span>SEPTEMBER 27–28, 2026</span>
          <span className="hero-footer-pipe">|</span>
          <span>24 HOURS</span>
          <span className="hero-footer-pipe">|</span>
          <span>MODEL ENGINEERING COLLEGE</span>
        </div>
      </div>

      <a href="#about" className="hero-scroll-indicator" aria-label="Scroll to content" data-hero="6">
        <span className="scroll-label">SCROLL</span>
        <svg
          className="scroll-arrow"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </a>
    </section>
  );
}
