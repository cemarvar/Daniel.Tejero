// Nav scroll
window.addEventListener('scroll', () => {
    document.getElementById('main-nav').classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu
function toggleMenu() {
    document.getElementById('nav-links').classList.toggle('open');
}