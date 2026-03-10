/* ============================================================
   Long Property Management — Main JavaScript
   Form validation, mobile menu, scroll tracking, analytics stubs
   ============================================================ */

(function () {
  'use strict';

  // ── Mobile Menu Toggle ──────────────────────────────────────
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#main-nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close menu when a nav link is clicked
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── Smooth Scroll for anchor links ──────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerHeight = document.querySelector('.site-header')
          ? document.querySelector('.site-header').offsetHeight
          : 0;
        var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 16;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // ── Form Validation ─────────────────────────────────────────
  var form = document.getElementById('assessment-form');
  var formSuccess = document.getElementById('form-success');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var isValid = true;

      // Reset errors
      form.querySelectorAll('.is-invalid').forEach(function (el) {
        el.classList.remove('is-invalid');
      });
      form.querySelectorAll('.form-error').forEach(function (el) {
        el.classList.remove('is-visible');
      });

      // Name validation
      var nameInput = form.querySelector('[name="name"]');
      if (nameInput) {
        var nameVal = nameInput.value.trim();
        if (nameVal.length < 2 || nameVal.split(/\s+/).length < 1) {
          showError(nameInput, 'error-name');
          isValid = false;
        }
      }

      // Phone validation (10 digits)
      var phoneInput = form.querySelector('[name="phone"]');
      if (phoneInput) {
        var digits = phoneInput.value.replace(/\D/g, '');
        if (digits.length < 10) {
          showError(phoneInput, 'error-phone');
          isValid = false;
        }
      }

      // Email validation
      var emailInput = form.querySelector('[name="email"]');
      if (emailInput) {
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
          showError(emailInput, 'error-email');
          isValid = false;
        }
      }

      // Address validation
      var addressInput = form.querySelector('[name="address"]');
      if (addressInput) {
        if (addressInput.value.trim().length < 8) {
          showError(addressInput, 'error-address');
          isValid = false;
        }
      }

      // Units validation
      var unitsSelect = form.querySelector('[name="units"]');
      if (unitsSelect) {
        if (!unitsSelect.value) {
          showError(unitsSelect, 'error-units');
          isValid = false;
        }
      }

      if (isValid) {
        // Track form submit
        trackEvent('form_submit');

        // Show success message
        form.style.display = 'none';
        if (formSuccess) {
          formSuccess.classList.add('is-visible');
        }
      }
    });

    // Track form start (first interaction)
    var formStarted = false;
    form.addEventListener('focusin', function () {
      if (!formStarted) {
        formStarted = true;
        trackEvent('form_start');
      }
    });
  }

  function showError(input, errorId) {
    input.classList.add('is-invalid');
    var errorEl = document.getElementById(errorId);
    if (errorEl) {
      errorEl.classList.add('is-visible');
    }
    // Focus first invalid field
    if (document.querySelector('.is-invalid') === input) {
      input.focus();
    }
  }

  // ── Analytics Event Tracking (stubs) ────────────────────────
  // Replace with GA4 gtag() calls or your analytics platform

  function trackEvent(eventName, params) {
    // GA4 integration:
    // if (typeof gtag === 'function') {
    //   gtag('event', eventName, params || {});
    // }

    // Debug logging (remove in production)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('[Track]', eventName, params || '');
    }
  }

  // Track CTA clicks
  document.querySelectorAll('[data-track]').forEach(function (el) {
    el.addEventListener('click', function () {
      trackEvent(this.getAttribute('data-track'));
    });
  });

  // ── Scroll Depth Tracking ───────────────────────────────────
  var scrollMilestones = { 50: false, 75: false, 90: false };

  function checkScrollDepth() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (docHeight <= 0) return;

    var scrollPercent = Math.round((scrollTop / docHeight) * 100);

    Object.keys(scrollMilestones).forEach(function (milestone) {
      if (!scrollMilestones[milestone] && scrollPercent >= parseInt(milestone, 10)) {
        scrollMilestones[milestone] = true;
        trackEvent('scroll_' + milestone);
      }
    });
  }

  var scrollTimeout;
  window.addEventListener('scroll', function () {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(checkScrollDepth, 200);
  }, { passive: true });

  // ── Section View Tracking ───────────────────────────────────
  if ('IntersectionObserver' in window) {
    var viewedSections = new Set();
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var trackView = entry.target.getAttribute('data-track-view');
          if (trackView && !viewedSections.has(trackView)) {
            viewedSections.add(trackView);
            trackEvent(trackView);
          }
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('[data-track-view]').forEach(function (el) {
      sectionObserver.observe(el);
    });
  }

})();
