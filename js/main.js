const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav__toggle');
const navMobile = document.getElementById('nav-menu');

const sentinel = document.createElement('div');
sentinel.style.cssText = 'position:absolute;top:80px;height:1px;width:1px;pointer-events:none';
document.body.prepend(sentinel);

const observer = new IntersectionObserver(([entry]) => {
    navbar.classList.toggle('scrolled', !entry.isIntersecting);
});

observer.observe(sentinel);

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

