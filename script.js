/**
 * REMAP 2026 — JavaScript
 *
 * Modules:
 *  1. Hero entrance sequence
 *  2. Sticky navigation + scroll state
 *  3. Active section tracking
 *  4. Mobile navigation drawer
 *  5. Scroll-triggered reveal animations (IntersectionObserver)
 *  6. FAQ accordion
 *  7. Schedule tabs
 *  8. Graceful degradation + reduced motion
 */

(function () {
  'use strict';

  /* -----------------------------------------------------------------------
     Utilities
  ----------------------------------------------------------------------- */

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  function qs(selector, ctx = document) {
    return ctx.querySelector(selector);
  }

  function qsa(selector, ctx = document) {
    return Array.from(ctx.querySelectorAll(selector));
  }

  function on(el, event, fn, opts) {
    if (el) el.addEventListener(event, fn, opts);
  }


  /* -----------------------------------------------------------------------
     1. Hero Entrance Sequence
     Staggers hero elements on first paint.
     Gracefully degrades — elements already have opacity:0 in CSS but
     the CSS class .hero-visible brings them back.
  ----------------------------------------------------------------------- */

  function initHeroEntrance() {
    const heroEls = qsa('[data-hero]');
    if (!heroEls.length) return;

    // Define delay schedule (ms)
    const delays = {
      '1': 120,   // REMAP
      '2': 220,   // 3.0
      '3': 320,   // statement / badges
      '4': 420,   // copy
      '5': 520,   // CTA
      '6': 600,   // note
    };

    if (prefersReducedMotion) {
      // Reveal immediately if user prefers no motion
      heroEls.forEach(el => el.classList.add('hero-visible'));
      return;
    }

    // Stagger each element by its data-hero value
    heroEls.forEach(el => {
      const tier = el.dataset.hero || '0';
      const delay = delays[tier] || 0;
      setTimeout(() => el.classList.add('hero-visible'), delay);
    });
  }


  /* -----------------------------------------------------------------------
     2. Sticky Navigation + Scroll State
     Adds .scrolled class after 60px to trigger the blur/border effect.
  ----------------------------------------------------------------------- */

  function initStickyNav() {
    const nav = qs('#main-nav');
    if (!nav) return;

    const THRESHOLD = 60;

    function updateNavState() {
      const scrolled = window.scrollY > THRESHOLD;
      nav.classList.toggle('scrolled', scrolled);
    }

    // Throttled scroll listener
    let ticking = false;
    on(window, 'scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateNavState();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Run on load
    updateNavState();
  }


  /* -----------------------------------------------------------------------
     2b. Hero Scroll Dynamics & Parallax
     Subtly shifts background depth and fades content as user scrolls away.
  ----------------------------------------------------------------------- */

  function initHeroParallax() {
    const heroBg      = qs('.hero-bg');
    const heroContent = qs('.hero-content');
    const heroFooter  = qs('.hero-footer');
    if (!heroBg || prefersReducedMotion) return;

    let ticking = false;
    on(window, 'scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const heroH   = window.innerHeight;
          if (scrollY <= heroH * 1.2) {
            const ratio = scrollY / heroH;
            heroBg.style.transform = `translate3d(0, ${scrollY * 0.28}px, 0) scale(${1 + ratio * 0.04})`;
            if (heroContent) {
              heroContent.style.transform = `translate3d(0, ${-scrollY * 0.12}px, 0)`;
              heroContent.style.opacity   = `${Math.max(0, 1 - ratio * 1.6)}`;
            }
            if (heroFooter) {
              heroFooter.style.opacity = `${Math.max(0, 1 - ratio * 2)}`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }


  /* -----------------------------------------------------------------------
     3. Active Section Tracking
     Highlights the corresponding nav link as sections enter the viewport.
  ----------------------------------------------------------------------- */

  function initActiveSectionTracking() {
    const navLinks = qsa('.nav-links a');
    if (!navLinks.length) return;

    // Build a map: href → nav link element
    const linkMap = {};
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        linkMap[href.slice(1)] = link;
      }
    });

    const sections = qsa('section[id], main[id]');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const id = entry.target.id;
          const link = linkMap[id];
          if (!link) return;

          if (entry.isIntersecting) {
            // Remove active from all
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
          }
        });
      },
      {
        rootMargin: '-25% 0px -65% 0px',
        threshold: 0,
      }
    );

    sections.forEach(section => observer.observe(section));
  }


  /* -----------------------------------------------------------------------
     4. Mobile Navigation Drawer
  ----------------------------------------------------------------------- */

  function initMobileNav() {
    const menuBtn  = qs('#nav-menu-btn');
    const drawer   = qs('#nav-drawer');
    const overlay  = qs('#nav-overlay');
    const closeBtn = qs('#nav-drawer-close');
    const drawerLinks = qsa('.nav-drawer-links a');

    if (!menuBtn || !drawer || !overlay) return;

    let isOpen = false;
    let focusTrap = null;

    function open() {
      isOpen = true;
      drawer.hidden = false;
      overlay.removeAttribute('aria-hidden');

      // Force reflow then animate
      requestAnimationFrame(() => {
        drawer.classList.add('open');
        overlay.classList.add('open');
      });

      menuBtn.setAttribute('aria-expanded', 'true');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

      // Focus close button
      setTimeout(() => {
        if (closeBtn) closeBtn.focus();
      }, 350);
    }

    function close() {
      isOpen = false;
      drawer.classList.remove('open');
      overlay.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';

      // Hide after animation
      setTimeout(() => {
        drawer.hidden = true;
      }, 350);

      // Return focus to menu button
      menuBtn.focus();
    }

    on(menuBtn, 'click', () => {
      isOpen ? close() : open();
    });

    on(closeBtn, 'click', close);
    on(overlay, 'click', close);

    // Close on nav link click
    drawerLinks.forEach(link => {
      on(link, 'click', close);
    });

    // Escape key to close
    on(document, 'keydown', e => {
      if (e.key === 'Escape' && isOpen) {
        close();
      }
    });
  }


  /* -----------------------------------------------------------------------
     5. Scroll-Triggered Reveal Animations
     Uses IntersectionObserver to add .is-visible when elements enter
     the viewport. Fails gracefully if IntersectionObserver is unavailable.
  ----------------------------------------------------------------------- */

  function initScrollAnimations() {
    const animatedEls = qsa('[data-animate]');
    if (!animatedEls.length) return;

    // If IntersectionObserver is unavailable or reduced motion, show all
    if (!window.IntersectionObserver || prefersReducedMotion) {
      animatedEls.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.05,
      }
    );

    animatedEls.forEach(el => observer.observe(el));
  }


  /* -----------------------------------------------------------------------
     6. FAQ Accordion
     Smooth height animation using max-height transition.
     Properly manages aria-expanded and keyboard interaction.
  ----------------------------------------------------------------------- */

  function initFAQ() {
    const items = qsa('.faq-item');
    if (!items.length) return;

    items.forEach(item => {
      const btn    = qs('.faq-question', item);
      const answer = qs('.faq-answer', item);

      if (!btn || !answer) return;

      on(btn, 'click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true';

        // Close all others
        items.forEach(otherItem => {
          const otherBtn    = qs('.faq-question', otherItem);
          const otherAnswer = qs('.faq-answer', otherItem);
          if (otherBtn && otherBtn !== btn) {
            otherBtn.setAttribute('aria-expanded', 'false');
            otherAnswer && otherAnswer.classList.remove('open');
          }
        });

        // Toggle this one
        btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
        answer.classList.toggle('open', !isOpen);
      });

      // Keyboard: Enter and Space are handled by button default
    });
  }


  /* -----------------------------------------------------------------------
     7. Schedule Tabs
     Smooth crossfade between panels.
     Full keyboard support via ARIA tablist pattern.
  ----------------------------------------------------------------------- */

  function initScheduleTabs() {
    const tabList  = qs('.schedule-tabs');
    const tabs     = qsa('.tab-btn', tabList);
    const panels   = qsa('.timeline');

    if (!tabs.length || !panels.length) return;

    function activateTab(tab) {
      const targetDay = tab.dataset.day;

      // Update tab states
      tabs.forEach(t => {
        const isActive = t === tab;
        t.classList.toggle('active', isActive);
        t.setAttribute('aria-selected', isActive ? 'true' : 'false');
        t.setAttribute('tabindex', isActive ? '0' : '-1');
      });

      // Show/hide panels with a brief fade
      panels.forEach(panel => {
        const isTarget = panel.id === `panel-${targetDay}`;

        if (isTarget) {
          panel.hidden = false;
          panel.classList.remove('hidden');

          // Re-trigger scroll animations for newly-visible timeline entries
          if (!prefersReducedMotion) {
            const entries = qsa('[data-animate="timeline"]', panel);
            entries.forEach(entry => {
              entry.classList.remove('is-visible');
              setTimeout(() => entry.classList.add('is-visible'), 20);
            });
          }
        } else {
          panel.hidden = true;
          panel.classList.add('hidden');
        }
      });
    }

    tabs.forEach(tab => {
      on(tab, 'click', () => activateTab(tab));

      // Arrow key navigation (ARIA tablist pattern)
      on(tab, 'keydown', e => {
        const idx = tabs.indexOf(tab);

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
          e.preventDefault();
          const next = tabs[(idx + 1) % tabs.length];
          next.focus();
          activateTab(next);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
          e.preventDefault();
          const prev = tabs[(idx - 1 + tabs.length) % tabs.length];
          prev.focus();
          activateTab(prev);
        }
      });

      // Initial tabindex
      tab.setAttribute(
        'tabindex',
        tab.classList.contains('active') ? '0' : '-1'
      );
    });

    // Initialize first tab
    const firstPanel = qs('#panel-oct18');
    if (firstPanel) {
      firstPanel.hidden = false;
      firstPanel.classList.remove('hidden');
    }
  }


  /* -----------------------------------------------------------------------
     8. Smooth scroll for anchor links
     Accounts for the sticky nav height offset.
  ----------------------------------------------------------------------- */

  function initSmoothScroll() {
    const navH = parseInt(
      getComputedStyle(document.documentElement).getPropertyValue('--nav-h'),
      10
    ) || 72;

    qsa('a[href^="#"]').forEach(link => {
      on(link, 'click', e => {
        const id = link.getAttribute('href').slice(1);
        if (!id) return;

        const target = document.getElementById(id);
        if (!target) return;

        e.preventDefault();

        const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;

        window.scrollTo({
          top: Math.max(0, top),
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
        });
      });
    });
  }


  /* -----------------------------------------------------------------------
     Init — run all modules
  ----------------------------------------------------------------------- */

  function init() {
    initHeroEntrance();
    initStickyNav();
    initHeroParallax();
    initActiveSectionTracking();
    initMobileNav();
    initScrollAnimations();
    initFAQ();
    initScheduleTabs();
    initSmoothScroll();
  }

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
