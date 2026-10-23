// Shared theme management for amir.alijani website
(function() {
  const STORAGE_KEY = 'alijani-theme';

  function getTheme() {
    try { return localStorage.getItem(STORAGE_KEY) || 'dark'; } catch(e) { return 'dark'; }
  }
  function setTheme(t) {
    try { localStorage.setItem(STORAGE_KEY, t); } catch(e) {}
    document.documentElement.setAttribute('data-theme', t);
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.setAttribute('aria-label', t === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
      btn.querySelector('.theme-icon-moon') && (btn.querySelector('.theme-icon-moon').style.opacity = t === 'dark' ? '1' : '0');
      btn.querySelector('.theme-icon-sun') && (btn.querySelector('.theme-icon-sun').style.opacity = t === 'dark' ? '0' : '1');
    });
  }

  // Apply immediately to avoid flash
  document.documentElement.setAttribute('data-theme', getTheme());

  window.__themeToggle = function() {
    const current = getTheme();
    setTheme(current === 'dark' ? 'light' : 'dark');
  };

  document.addEventListener('DOMContentLoaded', function() {
    setTheme(getTheme());
  });
})();
