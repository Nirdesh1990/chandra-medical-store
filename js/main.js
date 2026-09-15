/* Chandra Medical Store — a few lines only, no dependencies. */

(function () {
  'use strict';

  /* One orchestrated reveal when the page loads. Nothing animates after this. */
  var items = document.querySelectorAll('.reveal');
  for (var i = 0; i < items.length; i++) {
    items[i].style.setProperty('--d', items[i].getAttribute('data-r') || 0);
  }

  function start() {
    document.body.classList.add('revealed');
  }

  if (document.readyState === 'complete') {
    start();
  } else {
    window.addEventListener('load', start);
    /* Safety net: if a font or the map is slow, do not hold the text hostage. */
    setTimeout(start, 1200);
  }

  /* Underline the section the reader is currently in. */
  var links = document.querySelectorAll('.bar-nav a');
  if (!links.length || !('IntersectionObserver' in window)) return;

  var byId = {};
  links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });

  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var a = byId[e.target.id];
      if (!a) return;
      a.style.borderBottomColor = e.isIntersecting ? '#1B7A4B' : 'transparent';
      a.style.color = e.isIntersecting ? '#fff' : '';
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  Object.keys(byId).forEach(function (id) {
    var section = document.getElementById(id);
    if (section) spy.observe(section);
  });
})();
