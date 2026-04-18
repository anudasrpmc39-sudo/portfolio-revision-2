/* ═══════════════════════════════════════════════
   PORTFOLIO JAVASCRIPT — Dr. Your Name
   ═══════════════════════════════════════════════ */

/**
 * Show a specific page by name and hide all others.
 * Smoothly scrolls back to the top on navigation.
 * @param {string} name - 'home' | 'about' | 'projects' | 'resources' | 'contact'
 */
function showPage(name) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(function (page) {
    page.classList.remove('active');
  });

  // Show target page
  var target = document.getElementById('page-' + name);
  if (target) {
    target.classList.add('active');
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Handle the contact form submission with visual feedback.
 * Resets after 3 seconds.
 * @param {HTMLButtonElement} btn - The submit button element
 */
function handleFormSubmit(btn) {
  // Success state
  btn.innerHTML =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
    '<polyline points="20 6 9 17 4 12"/></svg> Message Sent!';
  btn.style.background = '#059669';
  btn.disabled = true;

  // Reset after 3 seconds
  setTimeout(function () {
    btn.innerHTML =
      '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
      '<line x1="22" y1="2" x2="11" y2="13"/>' +
      '<polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Send Message';
    btn.style.background = '';
    btn.disabled = false;
  }, 3000);
}
