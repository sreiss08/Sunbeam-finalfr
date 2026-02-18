(function() {
  'use strict';
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observe elements for animations
  document.querySelectorAll('.service-card, .product-card, .review-card, .feature-card, .process-step, .gallery-item, .stat-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
  
  // Active navigation highlighting
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
  
  // Mobile Menu Toggle
  function initMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const overlay = document.querySelector('.mobile-nav-overlay');
    const body = document.body;
    
    if (!toggle || !overlay) {
      console.log('Mobile menu elements not found');
      return;
    }
    
    console.log('Mobile menu initialized');
    
    // Function to toggle menu
    function toggleMenu(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const isActive = toggle.classList.contains('active');
      console.log('Menu toggle clicked, isActive:', isActive);
      
      if (isActive) {
        toggle.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
      } else {
        toggle.classList.add('active');
        overlay.classList.add('active');
        body.style.overflow = 'hidden';
      }
    }
    
    // Add both click and touchend for iOS compatibility
    toggle.addEventListener('click', toggleMenu);
    toggle.addEventListener('touchend', toggleMenu);
    
    // Close menu when clicking overlay
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        toggle.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
      }
    });
    
    // Handle submenu toggles
    const submenuParents = overlay.querySelectorAll('[data-submenu]');
    submenuParents.forEach(parent => {
      parent.addEventListener('click', function(e) {
        e.preventDefault();
        const submenu = this.nextElementSibling;
        if (submenu && submenu.classList.contains('mobile-nav-submenu')) {
          submenu.classList.toggle('active');
        }
      });
    });
    
    // Close menu on link click
    const menuLinks = overlay.querySelectorAll('a:not([data-submenu])');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        overlay.classList.remove('active');
        body.style.overflow = '';
      });
    });
  }
  
  initMobileMenu();
})();
