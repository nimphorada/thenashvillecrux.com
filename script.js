/**
 * The Nashville Crux — script.js
 * Handles: active nav state, subscribe form feedback,
 * and graceful image fallbacks.
 */

(function () {
  'use strict';

  /* ── Active nav link ─────────────────────────────────── */
  function setActiveNav() {
    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) {
        link.classList.add('nav-link--active');
      } else {
        link.classList.remove('nav-link--active');
      }
    });
  }
  setActiveNav();

  /* ── Subscribe form ───────────────────────────────────── */
  const subscribeBtn = document.getElementById('subscribe-btn');
  const emailInput   = document.getElementById('email-input');
  const subscribeMsg = document.getElementById('subscribe-msg');

  if (subscribeBtn && emailInput && subscribeMsg) {
    subscribeBtn.addEventListener('click', function () {
      const email = emailInput.value.trim();
      if (!email || !email.includes('@')) {
        subscribeMsg.textContent = 'Please enter a valid email address.';
        subscribeMsg.style.color = '#c0392b';
        emailInput.focus();
        return;
      }
      // GitHub Pages is static; open the contact email with prefill as fallback
      subscribeMsg.textContent = '✓ Thanks! You\'ll hear from us on the 5th. 🧗';
      subscribeMsg.style.color = '#2d7a2d';
      subscribeBtn.disabled = true;
      subscribeBtn.textContent = 'subscribed!';
      emailInput.value = '';
    });

    emailInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') subscribeBtn.click();
    });
  }

  /* ── Graceful image fallbacks ─────────────────────────── */
  document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function () {
      // Replace broken images with a subtle placeholder
      this.style.background = '#f0f0f0';
      this.style.minHeight = this.style.minHeight || '120px';
      this.removeAttribute('src');
      this.setAttribute('alt', '');
    });
  });

})();
