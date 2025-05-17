document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = $('#menu-toggle');
    const mobileMenu = $('#mobile-menu');

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    const navLinks = $$('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
});