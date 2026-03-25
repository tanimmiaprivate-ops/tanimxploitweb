const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const yearEl = document.querySelector('#year');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
