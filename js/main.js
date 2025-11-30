(function () {
  const toggle = document.getElementById('menu-btn');
  const nav = document.getElementById('site-nav');

  const closeNav = () => {
    if (!nav) return;
    nav.classList.remove('is-open');
    toggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  };

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      document.body.classList.toggle('no-scroll', isOpen);
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeNav);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeNav();
    });

    window.matchMedia('(min-width: 768px)').addEventListener('change', (event) => {
      if (event.matches) closeNav();
    });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();




