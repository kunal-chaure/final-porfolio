// ===== Mobile nav toggle =====
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuIcon.classList.toggle('bx-menu');
  menuIcon.classList.toggle('bx-x');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.add('bx-menu');
    menuIcon.classList.remove('bx-x');
  });
});

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
  let current = '';
  sections.forEach(sec => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 140;
    const height = sec.offsetHeight;
    if (top >= offset && top < offset + height) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}
window.addEventListener('scroll', setActiveLink);

// ===== Scroll progress bar =====
const progressFill = document.getElementById('scrollProgress');
function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressFill.style.width = pct + '%';
}
window.addEventListener('scroll', updateProgress);

// ===== Back to top button =====
const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  toTop.classList.toggle('show', window.scrollY > 500);
});

// ===== Reveal on scroll =====
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => io.observe(el));

// ===== Typed.js rotating role text =====
if (window.Typed) {
  new Typed('.multiple-text', {
    strings: [
      'responsive websites.',
      'clean interfaces.',
      'smooth UI.',
      'ideas into products.'
    ],
    typeSpeed: 55,
    backSpeed: 30,
    backDelay: 1400,
    loop: true
  });
}
