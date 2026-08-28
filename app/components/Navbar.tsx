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
      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`} id="main-nav" role="navigation" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="REMAP 3.0 home">
          REMAP<span>_3.0</span>
        </a>

        <div className="nav-links" role="list">
          <a href="#about" role="listitem" className={activeSection === 'about' ? 'active' : ''}>Features</a>
          <a href="#schedule" role="listitem" className={activeSection === 'schedule' ? 'active' : ''}>Schedule</a>
          <a href="#faq" role="listitem" className={activeSection === 'faq' ? 'active' : ''}>FAQ</a>
          <a href="#contact" role="listitem" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
        </div>

        <a href="#register" className="nav-cta">
          Register Now <span aria-hidden="true">↗</span>
        </a>

        <button
          className="nav-menu-btn"
          id="nav-menu-btn"
          aria-label="Open navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="nav-drawer"
          onClick={toggleMobileMenu}
        >
          <span className="hamburger" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`nav-overlay ${isMobileMenuOpen ? 'open' : ''}`} 
        id="nav-overlay" 
        aria-hidden={!isMobileMenuOpen}
        onClick={closeMobileMenu}
      ></div>
      
      <div
        className={`nav-drawer ${isMobileMenuOpen ? 'open' : ''}`}
        id="nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        hidden={!isMobileMenuOpen}
      >
        <div className="nav-drawer-header">
          <a className="brand" href="#top" onClick={closeMobileMenu}>
            REMAP<span>_3.0</span>
          </a>
          <button className="nav-drawer-close" id="nav-drawer-close" aria-label="Close navigation menu" onClick={closeMobileMenu}>
            <span aria-hidden="true">✕</span>
          </button>
        </div>
        <nav className="nav-drawer-links" aria-label="Mobile navigation">
          <a href="#about" onClick={closeMobileMenu}>Features</a>
          <a href="#schedule" onClick={closeMobileMenu}>Schedule</a>
          <a href="#faq" onClick={closeMobileMenu}>FAQ</a>
          <a href="#contact" onClick={closeMobileMenu}>Contact</a>
          <a href="#register" onClick={closeMobileMenu}>Register Now</a>
        </nav>
        <div className="nav-drawer-footer">
          <p>27–28 SEPT 2026 · Model Engineering College, Thrikkakara</p>
        </div>
      </div>
    </>
  );
}
