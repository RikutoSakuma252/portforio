/**
 * KOKU Coffee — script.js
 * Scroll effects, mobile nav, IntersectionObserver reveals
 */

(function () {
  'use strict';

  // ─── Nav: scroll state ─────────────────────────────────────────────────────
  const nav = document.getElementById('nav');

  function onScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run on init in case page loads mid-scroll

  // ─── Nav: mobile toggle ────────────────────────────────────────────────────
  const navToggle = document.getElementById('navToggle');
  const navLinks  = document.getElementById('navLinks');

  navToggle.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    nav.classList.toggle('menu-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'メニューを閉じる' : 'メニューを開く');

    // Prevent body scroll when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile nav on any link click
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      nav.classList.remove('menu-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'メニューを開く');
      document.body.style.overflow = '';
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
      nav.classList.remove('menu-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'メニューを開く');
      document.body.style.overflow = '';
      navToggle.focus();
    }
  });

  // ─── Smooth scroll for anchor links ───────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      const navHeight = nav.offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });

  // ─── IntersectionObserver: scroll reveals ─────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -48px 0px',
      }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    revealEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ─── Hero parallax (subtle, desktop only) ─────────────────────────────────
  const heroImage = document.querySelector('.hero-image');

  if (heroImage && window.matchMedia('(min-width: 768px)').matches) {
    function onScrollParallax() {
      const scrolled = window.scrollY;
      const heroHeight = document.querySelector('.hero').offsetHeight;

      if (scrolled < heroHeight) {
        heroImage.style.transform = 'scale(1) translateY(' + scrolled * 0.25 + 'px)';
      }
    }

    window.addEventListener('scroll', onScrollParallax, { passive: true });
  }

})();
