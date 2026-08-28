'use client';

import { useEffect, useState } from 'react';
import { heroData,registerData } from '../data/content';

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
      '7': 680,
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

      <div className="relative z-2 max-w-[680px] px-[24px] md:px-[5vw] lg:px-[7vw] pt-[320px] md:pt-[220px] lg:pt-[260px] pb-[120px]" style={contentStyle}>
        <h1 className="inline-block w-fit text-[min(20vw,96px)] md:text-[clamp(84px,9.4vw,144px)] font-semibold leading-[0.82] md:leading-[0.72] tracking-[-0.095em] uppercase ml-[-2px] md:ml-[-4px]" aria-label={heroData.title}>
          <span className="block opacity-0 translate-y-[14px] transition-all duration-550 ease-out" data-hero="1">{heroData.title.split(' ')[0]}</span>
          <em className="block not-italic text-transparent [-webkit-text-stroke:1px_var(--accent)] md:[-webkit-text-stroke:1.5px_var(--accent)] tracking-[-0.05em] mt-[8px] md:mt-[10px] text-left opacity-0 translate-y-[14px] transition-all duration-550 ease-out" data-hero="2">{heroData.title.split(' ')[1]}</em>
        </h1>

        <p className="mt-[20px] md:mt-[24px] text-[14px] md:text-[18px] leading-[1.6] font-medium tracking-[-0.02em] text-paper opacity-0 translate-y-[14px] transition-all duration-550 ease-out max-w-[90%] md:max-w-none" data-hero="3">
          {heroData.description}
        </p>

        <div className="mt-[16px] text-[12px] md:text-[15px] font-mono text-muted opacity-0 translate-y-[14px] transition-all duration-550 ease-out flex flex-col gap-[4px]" data-hero="4">
          <div>DATE: {heroData.date}</div>
          <div>VENUE: {heroData.venue}</div>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-[12px] md:gap-[16px] mt-[28px] opacity-0 translate-y-[14px] transition-all duration-550 ease-out" data-hero="5">
          <a href={registerData.registerLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-[12px] md:gap-[20px] px-[18px] md:px-[20px] py-[13px] font-mono font-medium text-[11px] leading-none tracking-[0.04em] uppercase whitespace-nowrap bg-[length:200%_100%] bg-[100%_0] text-[#1a0810] border border-accent transition-all duration-350 ease-out hover:bg-[0_0] hover:border-[#dc3f59] active:bg-[#b02a40] active:border-[#b02a40] group/btn" style={{ backgroundImage: 'linear-gradient(90deg, #dc3f59 50%, var(--accent) 50%)' }}>
            Register Now <span className="inline-block transition-transform duration-200 ease-out group-hover/btn:translate-x-[4px]" aria-hidden="true">→</span>
          </a>
          <a href="#schedule" className="inline-flex items-center gap-[12px] md:gap-[20px] bg-[#1a1c20] text-paper px-[18px] md:px-[20px] py-[13px] border border-[#2e3138] font-mono font-medium text-[11px] leading-none tracking-[0.04em] uppercase transition-colors duration-200 hover:bg-[#2e3138] hover:text-white group/ghost">
            See the schedule <span className="inline-block transition-transform duration-200 ease-out group-hover/ghost:translate-y-[2px]" aria-hidden="true">↓</span>
          </a>
        </div>

        <p className="mt-[18px] text-dim text-[12px] opacity-0 translate-y-[14px] transition-all duration-550 ease-out" data-hero="6">No prior hardware experience needed.</p>
      </div>
    </section>
  );
}
