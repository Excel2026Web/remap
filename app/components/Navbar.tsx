'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Scroll effect for blurred nav background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for active nav links
  useEffect(() => {
    const sections = document.querySelectorAll('section[id], main[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-25% 0px -65% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Navigation */}
      <nav 
        id="main-nav" 
        role="navigation" 
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-[100] h-[72px] md:h-[90px] flex items-center justify-between px-[20px] md:px-[5vw] lg:px-[7vw] transition-all duration-550 ease-out border-b ${
          isScrolled 
            ? 'bg-[#07080a]/90 border-rule backdrop-blur-md' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <a 
          href="#top" 
          aria-label="REMAP 3.0 home"
          className="flex items-center shrink-0 transition-opacity duration-200 hover:opacity-80"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/logo.png" 
            alt="REMAP 3.0" 
            className="h-[60px] md:h-[80px] w-auto object-contain" 
          />
        </a>

        <div className="hidden md:flex items-center gap-[28px]" role="list">
          <a 
            href="#top" 
            role="listitem" 
            className={`relative font-sans text-[14px] pb-[2px] transition-colors duration-200 after:absolute after:bottom-[-1px] after:left-0 after:h-[1px] after:bg-teal after:transition-all after:duration-350 hover:text-paper hover:after:w-full ${
              activeSection === 'top' ? 'text-paper after:w-full' : 'text-muted after:w-0'
            }`}
          >Home</a>
          <a 
            href="#features" 
            role="listitem" 
            className={`relative font-sans text-[14px] pb-[2px] transition-colors duration-200 after:absolute after:bottom-[-1px] after:left-0 after:h-[1px] after:bg-teal after:transition-all after:duration-350 hover:text-paper hover:after:w-full ${
              activeSection === 'features' ? 'text-paper after:w-full' : 'text-muted after:w-0'
            }`}
          >Features</a>
          <a 
            href="#register" 
            role="listitem" 
            className={`relative font-sans text-[14px] pb-[2px] transition-colors duration-200 after:absolute after:bottom-[-1px] after:left-0 after:h-[1px] after:bg-teal after:transition-all after:duration-350 hover:text-paper hover:after:w-full ${
              activeSection === 'register' ? 'text-paper after:w-full' : 'text-muted after:w-0'
            }`}
          >What&apos;s included</a>
          <a 
            href="#schedule" 
            role="listitem" 
            className={`relative font-sans text-[14px] pb-[2px] transition-colors duration-200 after:absolute after:bottom-[-1px] after:left-0 after:h-[1px] after:bg-teal after:transition-all after:duration-350 hover:text-paper hover:after:w-full ${
              activeSection === 'schedule' ? 'text-paper after:w-full' : 'text-muted after:w-0'
            }`}
          >Schedule</a>
          <a 
            href="#faq" 
            role="listitem" 
            className={`relative font-sans text-[14px] pb-[2px] transition-colors duration-200 after:absolute after:bottom-[-1px] after:left-0 after:h-[1px] after:bg-teal after:transition-all after:duration-350 hover:text-paper hover:after:w-full ${
              activeSection === 'faq' ? 'text-paper after:w-full' : 'text-muted after:w-0'
            }`}
          >FAQ</a>
          <a 
            href="#contact" 
            role="listitem" 
            className={`relative font-sans text-[14px] pb-[2px] transition-colors duration-200 after:absolute after:bottom-[-1px] after:left-0 after:h-[1px] after:bg-teal after:transition-all after:duration-350 hover:text-paper hover:after:w-full ${
              activeSection === 'contact' ? 'text-paper after:w-full' : 'text-muted after:w-0'
            }`}
          >Contact</a>
        </div>

        <button
          id="nav-menu-btn"
          aria-label="Open navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="nav-drawer"
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center justify-center w-[40px] h-[40px] bg-transparent border border-rule transition-colors duration-200 hover:border-muted p-0"
        >
          <span className="flex flex-col gap-[5px] w-[18px]" aria-hidden="true">
            <span className={`block h-[1px] bg-paper transition-all duration-350 origin-center ${isMobileMenuOpen ? 'translate-y-[6px] rotate-45' : ''}`}></span>
            <span className={`block h-[1px] bg-paper transition-all duration-200 origin-center ${isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''}`}></span>
            <span className={`block h-[1px] bg-paper transition-all duration-350 origin-center ${isMobileMenuOpen ? 'translate-y-[-6px] -rotate-45' : ''}`}></span>
          </span>
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div 
        id="nav-overlay" 
        aria-hidden={!isMobileMenuOpen}
        onClick={closeMobileMenu}
        className={`fixed inset-0 z-[199] bg-[#07080a]/70 backdrop-blur-sm transition-opacity duration-350 pointer-events-none ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'}`}
      ></div>
      
      <div
        id="nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        hidden={!isMobileMenuOpen}
        className={`fixed top-0 right-0 bottom-0 z-[200] w-[min(320px,85vw)] bg-surface border-l border-rule flex flex-col p-0 transition-transform duration-550 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-[22px_24px] border-b border-rule">
          <a href="#top" onClick={closeMobileMenu} className="flex items-center" aria-label="REMAP 3.0 home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/logo.png" 
              alt="REMAP 3.0" 
              className="h-[52px] w-auto object-contain" 
            />
          </a>
          <button 
            id="nav-drawer-close" 
            aria-label="Close navigation menu" 
            onClick={closeMobileMenu}
            className="w-[36px] h-[36px] bg-transparent border border-rule text-muted text-[14px] flex items-center justify-center transition-colors duration-200 hover:text-paper hover:border-muted"
          >
            <span aria-hidden="true">✕</span>
          </button>
        </div>
        <nav className="flex flex-col p-[32px_24px] gap-0 flex-1" aria-label="Mobile navigation">
          <a href="#top" onClick={closeMobileMenu} className="font-sans font-medium text-[22px] tracking-[-0.04em] text-muted py-[14px] border-b border-t border-rule transition-colors duration-200 hover:text-paper">Home</a>
          <a href="#features" onClick={closeMobileMenu} className="font-sans font-medium text-[22px] tracking-[-0.04em] text-muted py-[14px] border-b border-rule transition-colors duration-200 hover:text-paper">Features</a>
          <a href="#register" onClick={closeMobileMenu} className="font-sans font-medium text-[22px] tracking-[-0.04em] text-muted py-[14px] border-b border-rule transition-colors duration-200 hover:text-paper">What&apos;s included</a>
          <a href="#schedule" onClick={closeMobileMenu} className="font-sans font-medium text-[22px] tracking-[-0.04em] text-muted py-[14px] border-b border-rule transition-colors duration-200 hover:text-paper">Schedule</a>
          <a href="#faq" onClick={closeMobileMenu} className="font-sans font-medium text-[22px] tracking-[-0.04em] text-muted py-[14px] border-b border-rule transition-colors duration-200 hover:text-paper">FAQ</a>
          <a href="#contact" onClick={closeMobileMenu} className="font-sans font-medium text-[22px] tracking-[-0.04em] text-muted py-[14px] border-b border-rule transition-colors duration-200 hover:text-paper">Contact</a>
        </nav>
        <div className="p-[24px] border-t border-rule">
          <p className="text-dim font-mono font-normal text-[10px] tracking-[0.08em] uppercase">19–20 SEPT 2026 · Model Engineering College, Thrikkakara</p>
        </div>
      </div>
    </>
  );
}
