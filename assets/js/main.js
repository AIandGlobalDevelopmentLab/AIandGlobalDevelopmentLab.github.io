/**
 * AI & Global Development Lab - Main JavaScript
 * Minimal, progressive enhancement only
 */

(function() {
  'use strict';

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
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (!lightbox || galleryItems.length === 0) return;

    galleryItems.forEach(function(item) {
      item.addEventListener('click', function() {
        const img = this.querySelector('img');
        if (img) {
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
          lightbox.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
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

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    initMobileNav();
    initPublicationFilters();
    initAccordion();
    initLightbox();
    initSmoothScroll();
  });

})();
