/* AMR Cosmetics — homepage enhancements
 * Progressive enhancement only. Every section renders correctly without this file.
 * Adds:
 *   - FAQ single-open behavior + smooth open/close
 *   - Lazy reveal on scroll (respects prefers-reduced-motion)
 * No dependencies. ES2018+.
 */
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- FAQ: single-open + smooth toggle ---------- */
  function initFaq() {
    var lists = document.querySelectorAll('[data-amr-faq]');
    lists.forEach(function (list) {
      var items = list.querySelectorAll('[data-amr-faq-item]');
      items.forEach(function (item) {
        var summary = item.querySelector('summary');
        if (!summary) return;
        summary.addEventListener('click', function (event) {
          event.preventDefault();
          var isOpen = item.hasAttribute('open');
          // Close siblings if not reduced motion
          if (!isOpen) {
            items.forEach(function (sibling) {
              if (sibling !== item && sibling.hasAttribute('open')) {
                closeItem(sibling);
              }
            });
          }
          if (isOpen) {
            closeItem(item);
          } else {
            openItem(item);
          }
        });
      });
    });
  }

  function openItem(item) {
    var answer = item.querySelector('.amr-faq__answer');
    if (!answer || prefersReducedMotion) {
      item.setAttribute('open', '');
      return;
    }
    item.setAttribute('open', '');
    answer.style.height = '0';
    var height = answer.scrollHeight;
    requestAnimationFrame(function () {
      answer.style.transition = 'height 280ms cubic-bezier(0.2, 0.6, 0.2, 1)';
      answer.style.height = height + 'px';
    });
    answer.addEventListener('transitionend', function handler() {
      answer.style.height = '';
      answer.style.transition = '';
      answer.removeEventListener('transitionend', handler);
    });
  }

  function closeItem(item) {
    var answer = item.querySelector('.amr-faq__answer');
    if (!answer || prefersReducedMotion) {
      item.removeAttribute('open');
      return;
    }
    var height = answer.scrollHeight;
    answer.style.height = height + 'px';
    answer.style.transition = 'height 240ms cubic-bezier(0.2, 0.6, 0.2, 1)';
    requestAnimationFrame(function () {
      answer.style.height = '0';
    });
    answer.addEventListener('transitionend', function handler() {
      item.removeAttribute('open');
      answer.style.height = '';
      answer.style.transition = '';
      answer.removeEventListener('transitionend', handler);
    });
  }

  /* ---------- Lazy reveal on scroll ---------- */
  function initReveal() {
    if (prefersReducedMotion || !('IntersectionObserver' in window)) return;
    var targets = document.querySelectorAll('.amr-section');
    if (!targets.length) return;
    targets.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
      el.style.transition = 'opacity 600ms cubic-bezier(0.2, 0.6, 0.2, 1), transform 600ms cubic-bezier(0.2, 0.6, 0.2, 1)';
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '';
          entry.target.style.transform = '';
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    targets.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Boot ---------- */
  function boot() {
    initFaq();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
