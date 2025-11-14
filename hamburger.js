const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const hamburgerIcon = document.getElementById('hamburger-icon');
const closeIcon = document.getElementById('close-icon');
const mobileMenu = document.getElementById('mobile-menu');
const menuBackdrop = document.getElementById('menu-backdrop');

const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    menuBackdrop.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
};

mobileMenuBtn.addEventListener('click', toggleMenu);

menuBackdrop.addEventListener('click', toggleMenu);

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBackdrop.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    });
});