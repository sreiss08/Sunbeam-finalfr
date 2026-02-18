// Simple CMS Content Loader
// This script loads content from JSON files into your HTML pages

(function() {
  'use strict';
  
  // Load general settings
  async function loadSettings() {
    try {
      const response = await fetch('/content/settings/general.json');
      const settings = await response.json();
      
      // Update phone numbers
      document.querySelectorAll('[data-phone]').forEach(el => {
        el.textContent = settings.phone;
        if (el.tagName === 'A') {
          el.href = `tel:${settings.phone.replace(/[^0-9]/g, '')}`;
        }
      });
      
      // Update email
      document.querySelectorAll('[data-email]').forEach(el => {
        el.textContent = settings.email;
        if (el.tagName === 'A') {
          el.href = `mailto:${settings.email}`;
        }
      });
      
      // Update address
      document.querySelectorAll('[data-address]').forEach(el => {
        el.innerHTML = `${settings.address.street}<br>${settings.address.city}, ${settings.address.state} ${settings.address.zip}`;
      });
      
      // Update hours
      document.querySelectorAll('[data-hours]').forEach(el => {
        el.innerHTML = `Mon–Fri: ${settings.hours.weekday}<br>Saturday: ${settings.hours.saturday}<br>Sunday: ${settings.hours.sunday}`;
      });
      
    } catch (error) {
      console.log('Settings not loaded yet - using defaults');
    }
  }
  
  // Load homepage content
  async function loadHomeContent() {
    if (!document.body.classList.contains('page-home')) return;
    
    try {
      const response = await fetch('/content/pages/home.json');
      const content = await response.json();
      
      // Update hero
      const heroHeadline = document.querySelector('[data-hero-headline]');
      if (heroHeadline) heroHeadline.textContent = content.hero.headline;
      
      const heroSubhead = document.querySelector('[data-hero-subhead]');
      if (heroSubhead) heroSubhead.textContent = content.hero.subheadline;
      
      const heroBadge = document.querySelector('[data-hero-badge]');
      if (heroBadge) heroBadge.textContent = content.hero.badge;
      
    } catch (error) {
      console.log('Home content not loaded yet - using defaults');
    }
  }
  
  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  function init() {
    loadSettings();
    loadHomeContent();
  }
  
})();
