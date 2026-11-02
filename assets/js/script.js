'use strict';

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

if (navToggler && navbar) {
  for (let i = 0; i < navToggler.length; i++) {
    navToggler[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      if (overlay) overlay.classList.toggle("active");
    });
  }
}

if (navLinks && navbar) {
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
      navbar.classList.remove("active");
      if (overlay) overlay.classList.remove("active");
    });
  }
}

/**
 * header sticky & back to top button
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    if (header) header.classList.add("active");
    if (backTopBtn) backTopBtn.classList.add("active");
  } else {
    if (header) header.classList.remove("active");
    if (backTopBtn) backTopBtn.classList.remove("active");
  }
});

/**
 * Interactive Moving Quote Calculator
 */
function calculateAndSendQuote() {
  const fromEl = document.getElementById('quoteFromCity');
  const toEl = document.getElementById('quoteToCity');
  const sizeEl = document.getElementById('quoteMoveSize');
  const packEl = document.getElementById('quotePacking');

  const fromCity = fromEl ? fromEl.value : 'جدة';
  const toCity = toEl ? toEl.value : 'الرياض';
  const moveSize = sizeEl ? sizeEl.value : 'شقة عائلية (3-4 غرف)';
  const packing = packEl ? packEl.value : 'تغليف شامل VIP مع الفك والتركيب';

  const message = `مرحباً شركة AMC لنقل وتغليف الأثاث،
أرغب في الاستفسار عن عرض سعر نقل عفش مع الخصم الحالي (20%):
📍 من مدينة: ${fromCity}
📍 إلى مدينة: ${toCity}
🏠 حجم المنقولات: ${moveSize}
📦 باقة التغليف: ${packing}

يرجى تزويدي بأفضل تسعيرة والموعد المتاح للنقل. شكراً لكم!`;

  const waUrl = 'https://wa.me/966535242015?text=' + encodeURIComponent(message);
  window.open(waUrl, '_blank');
}
window.calculateAndSendQuote = calculateAndSendQuote;

/**
 * Floating High-Def WhatsApp & Phone Call Action Buttons
 */
document.addEventListener('DOMContentLoaded', function () {
  // Floating WhatsApp Button
  const waFloat = document.createElement('a');
  waFloat.setAttribute('class', 'aClassName');
  waFloat.setAttribute('href', 'https://wa.me/966535242015?text=' + encodeURIComponent('السلام عليكم شركة AMC، أرغب في الاستفسار عن خدمة نقل وتغليف العفش'));
  waFloat.setAttribute('target', '_blank');
  waFloat.setAttribute('rel', 'noopener');
  waFloat.setAttribute('aria-label', 'تواصل فوري عبر واتساب');
  waFloat.setAttribute('title', 'تواصل معنا فوراً عبر واتساب');
  waFloat.innerHTML = '<svg viewBox="0 0 32 32" width="34" height="34" fill="#ffffff" style="display:block;margin:auto;"><path d="M16 2a13.9 13.9 0 0 0-12 20.9L2 30l7.3-1.9A13.9 13.9 0 1 0 16 2zm0 25.5a11.6 11.6 0 0 1-5.9-1.6l-.4-.3-4.4 1.1 1.2-4.3-.3-.4A11.6 11.6 0 1 1 16 27.5zm6.4-8.6c-.3-.2-2-.9-2.3-1s-.6-.2-.8.2-.9 1.1-1.1 1.3-.4.3-.7.1a9.2 9.2 0 0 1-2.7-1.7 10.2 10.2 0 0 1-1.9-2.3c-.2-.3 0-.5.2-.7s.3-.4.5-.6.2-.3.3-.5.1-.3 0-.5-.8-2-1.1-2.7c-.3-.7-.6-.6-.8-.6h-.7a1.4 1.4 0 0 0-1 .5 4.3 4.3 0 0 0-1.3 3.2 7.5 7.5 0 0 0 1.6 4 17.2 17.2 0 0 0 6.6 5.8c.9.4 1.6.6 2.2.8a5.2 5.2 0 0 0 2.4.2 3.9 3.9 0 0 0 2.6-1.8 3.2 3.2 0 0 0 .2-1.8c-.3-.1-.6-.2-.9-.3z"/></svg>';
  document.body.appendChild(waFloat);

  // Floating Call Button
  const callFloat = document.createElement('a');
  callFloat.setAttribute('class', 'aClassName1');
  callFloat.setAttribute('href', 'tel:+966535242015');
  callFloat.setAttribute('aria-label', 'اتصال هاتفي مباشر');
  callFloat.setAttribute('title', 'اتصل بنا الآن: 0535242015');
  callFloat.innerHTML = '<svg viewBox="0 0 24 24" width="30" height="30" fill="#ffffff" style="display:block;margin:auto;"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"/></svg>';
  document.body.appendChild(callFloat);
});
