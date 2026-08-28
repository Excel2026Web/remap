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
      heroEls.forEach((el) => {
        el.classList.add('opacity-100', 'translate-y-0');
      });
    } else {
      heroEls.forEach((el) => {
        const tier = el.getAttribute('data-hero') || '0';
        const delay = delays[tier] || 0;
        setTimeout(() => {
          el.classList.add('opacity-100', 'translate-y-0');
        }, delay);
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
    <section 
      className="relative w-full h-screen min-h-screen overflow-hidden isolate group" 
      aria-label="Hero"
    >
      {/* Background */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-[position:72%_center] md:bg-[position:56%_center] will-change-transform filter saturate-[0.68] brightness-[0.88] md:saturate-[0.72] md:contrast-[1.03] md:brightness-[0.96]" 
        aria-hidden="true" 
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(7,8,10,0.97) 0%, rgba(7,8,10,0.84) 38%, rgba(7,8,10,0.28) 64%, rgba(7,8,10,0.40) 100%),
            linear-gradient(0deg, rgba(7,8,10,0.72) 0%, transparent 38%),
            url('/hero-clear.png')
          `,
          ...bgStyle
        }}
      ></div>

      <div className="relative z-2 max-w-[680px] px-[24px] md:px-[5vw] lg:px-[7vw] pt-[clamp(130px,18vh,190px)] pb-[120px]" style={contentStyle}>
        <h1 className="inline-block w-fit text-[min(20vw,96px)] md:text-[clamp(84px,9.4vw,144px)] font-semibold leading-[0.82] md:leading-[0.72] tracking-[-0.095em] uppercase ml-[-2px] md:ml-[-4px]" aria-label="REMAP 3.0">
          <span className="block opacity-0 translate-y-[14px] transition-all duration-550 ease-out" data-hero="1">REMAP</span>
          <em className="block not-italic text-transparent [-webkit-text-stroke:1px_var(--accent)] md:[-webkit-text-stroke:1.5px_var(--accent)] tracking-[-0.05em] mt-[8px] md:mt-[10px] text-left opacity-0 translate-y-[14px] transition-all duration-550 ease-out" data-hero="2">3.0</em>
        </h1>

        <p className="mt-[20px] md:mt-[24px] text-[16px] md:text-[20px] font-medium tracking-[-0.03em] text-paper opacity-0 translate-y-[14px] transition-all duration-550 ease-out" data-hero="3">An overnight hardware experience for B.Tech students.</p>

        <div className="flex flex-wrap items-center gap-[16px] md:gap-[24px] mt-[28px] opacity-0 translate-y-[14px] transition-all duration-550 ease-out" data-hero="4">
          <a href="#register" className="inline-flex items-center gap-[20px] px-[20px] py-[13px] font-mono font-medium text-[11px] leading-none tracking-[0.04em] uppercase whitespace-nowrap bg-[length:200%_100%] bg-[100%_0] text-[#1a0810] border border-accent transition-all duration-350 ease-out hover:bg-[0_0] hover:border-[#dc3f59] active:bg-[#b02a40] active:border-[#b02a40] group/btn" style={{ backgroundImage: 'linear-gradient(90deg, #dc3f59 50%, var(--accent) 50%)' }}>
            Get Started <span className="inline-block transition-transform duration-200 ease-out group-hover/btn:translate-x-[4px]" aria-hidden="true">→</span>
          </a>
          <a href="#schedule" className="inline-flex items-center gap-[20px] bg-transparent text-muted px-0 pb-[1px] border-b border-dim font-mono font-medium text-[11px] leading-none tracking-[0.04em] uppercase transition-colors duration-200 hover:text-paper hover:border-paper group/ghost">
            See the schedule <span className="inline-block transition-transform duration-200 ease-out group-hover/ghost:translate-y-[2px]" aria-hidden="true">↓</span>
          </a>
        </div>

        <p className="mt-[18px] text-dim text-[12px] opacity-0 translate-y-[14px] transition-all duration-550 ease-out" data-hero="5">No prior hardware experience needed.</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-2 flex items-center justify-between p-[18px_24px] md:p-[18px_5vw] lg:p-[18px_7vw] border-t border-rule bg-[#07080a]/90 backdrop-blur-md text-dim font-mono font-medium text-[10px] leading-none tracking-[0.08em] uppercase opacity-0 translate-y-[14px] transition-all duration-550 ease-out" data-hero="6" style={footerStyle}>
        <div className="flex items-center gap-[12px]">
          <span>REMAP</span>
          <span className="text-[#f2f0ea]/20">/</span>
          <span className="hidden md:inline">AN OVERNIGHT HARDWARE EXPERIENCE</span>
          <span className="md:hidden">HARDWARE EXP</span>
        </div>
        <div className="hidden md:flex items-center gap-[12px]">
          <span>SEPTEMBER 27–28, 2026</span>
          <span className="text-[#f2f0ea]/20">|</span>
          <span>24 HOURS</span>
          <span className="text-[#f2f0ea]/20">|</span>
          <span>MODEL ENGINEERING COLLEGE</span>
        </div>
      </div>

      <a href="#about" className="absolute bottom-[60px] left-1/2 -translate-x-1/2 translate-y-[6px] z-3 inline-flex flex-col items-center gap-[6px] text-[#f2f0ea]/40 font-mono font-medium text-[8px] leading-none tracking-[0.18em] uppercase p-[8px_16px] transition-all duration-700 ease-out opacity-0 hover:text-teal group/indicator" aria-label="Scroll to content" data-hero="6">
        <span>SCROLL</span>
        <svg
          className="animate-[scrollFloat_2.4s_cubic-bezier(0.65,0,0.35,1)_infinite]"
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
