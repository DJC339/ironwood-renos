// Minimal JS to fade in hero image once it’s loaded
(function () {
  var img = document.querySelector('.hero-img');
  if (!img) return;

  function loaded() {
    img.classList.add('is-loaded');
  }

  if (img.complete && img.naturalWidth > 0) {
    // Already cached/decoded
    loaded();
  } else {
    img.addEventListener('load', loaded, { once: true });
    img.addEventListener('error', loaded, { once: true }); // fail-open to avoid invisible image
  }
})();

