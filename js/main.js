// Simplified Mobile Menu for iOS Compatibility
function toggleMobileMenu() {
  var menu = document.getElementById('mobileMenu');
  var toggle = document.querySelector('.mobile-menu-toggle');
  var body = document.body;
  
  if (!menu || !toggle) {
    console.log('Menu elements not found');
    return;
  }
  
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    toggle.classList.remove('active');
    body.style.overflow = '';
  } else {
    menu.classList.add('active');
    toggle.classList.add('active');
    body.style.overflow = 'hidden';
  }
}

// Close menu when clicking a link
document.addEventListener('DOMContentLoaded', function() {
  // Close menu on link click
  var menuLinks = document.querySelectorAll('.mobile-nav-menu a:not([data-submenu])');
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      setTimeout(toggleMobileMenu, 100);
    });
  });
  
  // Handle submenu toggles
  var submenuToggles = document.querySelectorAll('[data-submenu]');
  submenuToggles.forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      var submenu = this.nextElementSibling;
      if (submenu && submenu.classList.contains('mobile-nav-submenu')) {
        submenu.classList.toggle('active');
      }
    });
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        var target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
  // Active navigation highlighting
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(function(link) {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
});
