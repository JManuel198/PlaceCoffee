const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav__toggle');
const navMobile = document.getElementById('nav-menu');

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
});

navToggle.addEventListener('click', () => {
    const isOpen = navToggle.classList.toggle('nav__toggle--open');
    navMobile.classList.toggle('nav__mobile--open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navMobile.setAttribute('aria-hidden', String(!isOpen));
});

navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('nav__toggle--open');
        navMobile.classList.remove('nav__mobile--open');
        navToggle.setAttribute('aria-expanded', 'false');
        navMobile.setAttribute('aria-hidden', 'true');
    });
});
