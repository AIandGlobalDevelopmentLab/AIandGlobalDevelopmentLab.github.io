/**
 * AI & Global Development Lab - Main JavaScript
 * Minimal, progressive enhancement only
 */

(function() {
  'use strict';

  // Keep CSS var in sync with sticky header height
  function initHeaderHeightVar() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    function setHeaderHeightVar() {
      document.documentElement.style.setProperty('--site-header-height', header.offsetHeight + 'px');
    }

    let resizeRaf = null;
    window.addEventListener('resize', function() {
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(function() {
        resizeRaf = null;
        setHeaderHeightVar();
      });
    });

    setHeaderHeightVar();
  }

  // Mobile Navigation Toggle
  function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', function() {
      const isActive = menu.classList.toggle('active');
      toggle.classList.toggle('active');
      toggle.setAttribute('aria-expanded', isActive);
    });

    // Close menu when clicking a link
    menu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        menu.classList.remove('active');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Publication Filtering
  function initPublicationFilters() {
    const filterButtons = document.querySelectorAll('#theme-filters .tag');
    const publications = document.querySelectorAll('.publication');
    const yearSections = document.querySelectorAll('.year-section');

    if (filterButtons.length === 0) return;

    filterButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');

        // Update active button
        filterButtons.forEach(function(btn) {
          btn.classList.remove('tag-active');
        });
        this.classList.add('tag-active');

        // Filter publications
        publications.forEach(function(pub) {
          const theme = pub.getAttribute('data-theme');
          if (filter === 'all' || theme === filter) {
            pub.style.display = '';
          } else {
            pub.style.display = 'none';
          }
        });

        // Hide empty year sections
        yearSections.forEach(function(section) {
          const visiblePubs = section.querySelectorAll('.publication:not([style*="display: none"])');
          section.style.display = visiblePubs.length > 0 ? '' : 'none';
        });
      });
    });
  }

  // Accordion (FAQ)
  function initAccordion() {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(function(header) {
      header.addEventListener('click', function() {
        const content = this.nextElementSibling;

        // Close all other accordions in the same group
        const parent = this.closest('.accordion');
        if (parent) {
          parent.querySelectorAll('.accordion-header.active').forEach(function(h) {
            if (h !== header) {
              h.classList.remove('active');
              h.setAttribute('aria-expanded', 'false');
              h.nextElementSibling.classList.remove('active');
            }
          });
        }

        // Toggle current
        this.classList.toggle('active');
        content.classList.toggle('active');
        this.setAttribute('aria-expanded', this.classList.contains('active') ? 'true' : 'false');
      });
    });
  }

  // Gallery Lightbox
  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
    const closeBtn = lightbox ? lightbox.querySelector('.lightbox-close') : null;
    const triggers = document.querySelectorAll('[data-lightbox], .gallery-item');

    if (!lightbox || triggers.length === 0) return;

    triggers.forEach(function(trigger) {
      trigger.addEventListener('click', function() {
        const img = this.querySelector('img');
        if (!img) return;

        // For <picture>, currentSrc resolves the actually-selected asset (e.g., dark-mode variant)
        const src = img.currentSrc || img.src;
        if (!src) return;

        lightboxImg.src = src;
        lightboxImg.alt = img.alt || '';
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    function closeLightbox() {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
      }
    });
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ===========================================
  // Scroll-Triggered Animations
  // ===========================================

  function initScrollAnimations() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const animatedElements = document.querySelectorAll('.animate-on-scroll, .animate-scale, .animate-slide-left, .animate-slide-right');
    if (animatedElements.length === 0) return;

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Optionally unobserve after animation (better performance)
          // observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(function(el) {
      observer.observe(el);
    });
  }

  // ===========================================
  // Animated Counters
  // ===========================================

  function initAnimatedCounters() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const counters = document.querySelectorAll('.animate-counter[data-target]');
    if (counters.length === 0) return;

    function animateCounter(element, target, duration) {
      const start = 0;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing function (ease-out-cubic)
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * eased);

        element.textContent = current.toLocaleString();

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          element.textContent = target.toLocaleString();
        }
      }

      if (prefersReducedMotion) {
        element.textContent = target.toLocaleString();
      } else {
        requestAnimationFrame(updateCounter);
      }
    }

    const counterObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target'), 10);
          const duration = parseInt(entry.target.getAttribute('data-duration') || '2000', 10);
          animateCounter(entry.target, target, duration);
          counterObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.5
    });

    counters.forEach(function(counter) {
      counter.textContent = '0';
      counterObserver.observe(counter);
    });
  }

  // ===========================================
  // Hero Parallax Effect
  // ===========================================

  function initHeroParallax() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const heroContent = document.querySelector('.hero .hero-content');
    const hero = document.querySelector('.hero');
    if (!heroContent || !hero) return;

    let ticking = false;

    function updateParallax() {
      const scrollY = window.scrollY;
      const heroHeight = hero.offsetHeight;

      // Only apply parallax when hero is visible
      if (scrollY < heroHeight) {
        const parallaxOffset = scrollY * 0.4;
        heroContent.style.transform = 'translateY(' + parallaxOffset + 'px)';
        heroContent.style.opacity = 1 - (scrollY / heroHeight) * 0.5;
      }
      ticking = false;
    }

    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
  }

  // ===========================================
  // Before/After Image Comparison Slider
  // ===========================================

  function initImageCompare() {
    const comparisons = document.querySelectorAll('.image-compare');
    if (comparisons.length === 0) return;

    comparisons.forEach(function(container) {
      const slider = container.querySelector('.image-compare__slider');
      const beforeImg = container.querySelector('.image-compare__before');
      if (!slider || !beforeImg) return;

      let isDragging = false;

      function updateSlider(x) {
        const rect = container.getBoundingClientRect();
        let percentage = ((x - rect.left) / rect.width) * 100;
        percentage = Math.max(0, Math.min(100, percentage));

        slider.style.left = percentage + '%';
        beforeImg.style.clipPath = 'inset(0 ' + (100 - percentage) + '% 0 0)';
      }

      function onDragStart(e) {
        isDragging = true;
        container.style.cursor = 'ew-resize';
        e.preventDefault();
      }

      function onDragEnd() {
        isDragging = false;
        container.style.cursor = '';
      }

      function onDragMove(e) {
        if (!isDragging) return;
        const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        updateSlider(x);
      }

      // Mouse events
      slider.addEventListener('mousedown', onDragStart);
      window.addEventListener('mouseup', onDragEnd);
      window.addEventListener('mousemove', onDragMove);

      // Touch events
      slider.addEventListener('touchstart', onDragStart, { passive: false });
      window.addEventListener('touchend', onDragEnd);
      window.addEventListener('touchmove', onDragMove, { passive: true });

      // Click anywhere on comparison to move slider
      container.addEventListener('click', function(e) {
        if (e.target === slider) return;
        updateSlider(e.clientX);
      });
    });
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    initHeaderHeightVar();
    initMobileNav();
    initPublicationFilters();
    initAccordion();
    initLightbox();
    initSmoothScroll();
    initScrollAnimations();
    initAnimatedCounters();
    initHeroParallax();
    initImageCompare();
  });

})();
