'use client';

import { useEffect } from 'react';

export default function Scripts() {
  useEffect(() => {
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
    ----------------------------------------------------------------------- */
    function initHeroEntrance() {
      const heroEls = qsa('[data-hero]');
      if (!heroEls.length) return;

      const delays = {
        '1': 120,
        '2': 220,
        '3': 320,
        '4': 420,
        '5': 520,
        '6': 600,
      };

      if (prefersReducedMotion) {
        heroEls.forEach((el) => el.classList.add('hero-visible'));
        return;
      }

      heroEls.forEach((el) => {
        const tier = el.dataset.hero || '0';
        const delay = delays[tier] || 0;
        setTimeout(() => el.classList.add('hero-visible'), delay);
      });
    }

    /* -----------------------------------------------------------------------
       2. Sticky Navigation + Scroll State
    ----------------------------------------------------------------------- */
    function initStickyNav() {
      const nav = qs('#main-nav');
      if (!nav) return;

      const THRESHOLD = 60;

      function updateNavState() {
        const scrolled = window.scrollY > THRESHOLD;
        nav.classList.toggle('scrolled', scrolled);
      }

      let ticking = false;
      on(
        window,
        'scroll',
        () => {
          if (!ticking) {
            requestAnimationFrame(() => {
              updateNavState();
              ticking = false;
            });
            ticking = true;
          }
        },
        { passive: true }
      );

      updateNavState();
    }

    /* -----------------------------------------------------------------------
       2b. Hero Parallax
    ----------------------------------------------------------------------- */
    function initHeroParallax() {
      const heroBg = qs('.hero-bg');
      const heroContent = qs('.hero-content');
      const heroFooter = qs('.hero-footer');
      if (!heroBg || prefersReducedMotion) return;

      let ticking = false;
      on(
        window,
        'scroll',
        () => {
          if (!ticking) {
            requestAnimationFrame(() => {
              const scrollY = window.scrollY;
              const heroH = window.innerHeight;
              if (scrollY <= heroH * 1.2) {
                const ratio = scrollY / heroH;
                heroBg.style.transform = `translate3d(0, ${scrollY * 0.28}px, 0) scale(${1 + ratio * 0.04})`;
                if (heroContent) {
                  heroContent.style.transform = `translate3d(0, ${-scrollY * 0.12}px, 0)`;
                  heroContent.style.opacity = `${Math.max(0, 1 - ratio * 1.6)}`;
                }
                if (heroFooter) {
                  heroFooter.style.opacity = `${Math.max(0, 1 - ratio * 2)}`;
                }
              }
              ticking = false;
            });
            ticking = true;
          }
        },
        { passive: true }
      );
    }

    /* -----------------------------------------------------------------------
       3. Active Section Tracking
    ----------------------------------------------------------------------- */
    function initActiveSectionTracking() {
      const navLinks = qsa('.nav-links a');
      if (!navLinks.length) return;

      const linkMap = {};
      navLinks.forEach((link) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          linkMap[href.slice(1)] = link;
        }
      });

      const sections = qsa('section[id], main[id]');

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = entry.target.id;
            const link = linkMap[id];
            if (!link) return;

            if (entry.isIntersecting) {
              navLinks.forEach((l) => l.classList.remove('active'));
              link.classList.add('active');
            }
          });
        },
        {
          rootMargin: '-25% 0px -65% 0px',
          threshold: 0,
        }
      );

      sections.forEach((section) => observer.observe(section));
    }

    /* -----------------------------------------------------------------------
       4. Mobile Navigation Drawer
    ----------------------------------------------------------------------- */
    function initMobileNav() {
      const menuBtn = qs('#nav-menu-btn');
      const drawer = qs('#nav-drawer');
      const overlay = qs('#nav-overlay');
      const closeBtn = qs('#nav-drawer-close');
      const drawerLinks = qsa('.nav-drawer-links a');

      if (!menuBtn || !drawer || !overlay) return;

      let isOpen = false;

      function open() {
        isOpen = true;
        drawer.hidden = false;
        overlay.removeAttribute('aria-hidden');

        requestAnimationFrame(() => {
          drawer.classList.add('open');
          overlay.classList.add('open');
        });

        menuBtn.setAttribute('aria-expanded', 'true');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

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

        setTimeout(() => {
          drawer.hidden = true;
        }, 350);

        menuBtn.focus();
      }

      on(menuBtn, 'click', () => {
        isOpen ? close() : open();
      });

      on(closeBtn, 'click', close);
      on(overlay, 'click', close);

      drawerLinks.forEach((link) => {
        on(link, 'click', close);
      });

      on(document, 'keydown', (e) => {
        if (e.key === 'Escape' && isOpen) {
          close();
        }
      });
    }

    /* -----------------------------------------------------------------------
       5. Scroll-Triggered Reveal Animations
    ----------------------------------------------------------------------- */
    function initScrollAnimations() {
      const animatedEls = qsa('[data-animate]');
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
    }

    /* -----------------------------------------------------------------------
       6. FAQ Accordion
    ----------------------------------------------------------------------- */
    function initFAQ() {
      const items = qsa('.faq-item');
      if (!items.length) return;

      items.forEach((item) => {
        const btn = qs('.faq-question', item);
        const answer = qs('.faq-answer', item);

        if (!btn || !answer) return;

        on(btn, 'click', () => {
          const isOpenNow = btn.getAttribute('aria-expanded') === 'true';

          items.forEach((otherItem) => {
            const otherBtn = qs('.faq-question', otherItem);
            const otherAnswer = qs('.faq-answer', otherItem);
            if (otherBtn && otherBtn !== btn) {
              otherBtn.setAttribute('aria-expanded', 'false');
              otherAnswer && otherAnswer.classList.remove('open');
            }
          });

          btn.setAttribute('aria-expanded', isOpenNow ? 'false' : 'true');
          answer.classList.toggle('open', !isOpenNow);
        });
      });
    }

    /* -----------------------------------------------------------------------
       7. Schedule Tabs
    ----------------------------------------------------------------------- */
    function initScheduleTabs() {
      const tabList = qs('.schedule-tabs');
      const tabs = qsa('.tab-btn', tabList);
      const panels = qsa('.timeline');

      if (!tabs.length || !panels.length) return;

      function activateTab(tab) {
        const targetDay = tab.dataset.day;

        tabs.forEach((t) => {
          const isActive = t === tab;
          t.classList.toggle('active', isActive);
          t.setAttribute('aria-selected', isActive ? 'true' : 'false');
          t.setAttribute('tabindex', isActive ? '0' : '-1');
        });

        panels.forEach((panel) => {
          const isTarget = panel.id === `panel-${targetDay}`;

          if (isTarget) {
            panel.hidden = false;
            panel.classList.remove('hidden');

            if (!prefersReducedMotion) {
              const entries = qsa('[data-animate="timeline"]', panel);
              entries.forEach((entry) => {
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

      tabs.forEach((tab) => {
        on(tab, 'click', () => activateTab(tab));

        on(tab, 'keydown', (e) => {
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

        tab.setAttribute('tabindex', tab.classList.contains('active') ? '0' : '-1');
      });

      const firstPanel = qs('#panel-oct18');
      if (firstPanel) {
        firstPanel.hidden = false;
        firstPanel.classList.remove('hidden');
      }
    }

    /* -----------------------------------------------------------------------
       8. Smooth scroll for anchor links
    ----------------------------------------------------------------------- */
    function initSmoothScroll() {
      const navH =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--nav-h'),
          10
        ) || 72;

      qsa('a[href^="#"]').forEach((link) => {
        on(link, 'click', (e) => {
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
    initHeroEntrance();
    initStickyNav();
    initHeroParallax();
    initActiveSectionTracking();
    initMobileNav();
    initScrollAnimations();
    initFAQ();
    initScheduleTabs();
    initSmoothScroll();
  }, []);

  return null;
}
