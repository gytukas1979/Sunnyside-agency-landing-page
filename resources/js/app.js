let hamburgerMenu = document.getElementById('hamburger-menu');
let mobileNav = document.getElementById('nav-mobile');
let mediaQueryChange = window.matchMedia('(max-width:51.625rem)');

hamburgerMenu.addEventListener('click', () => {
    if (mobileNav.classList.contains('hidden')) {
        mobileNav.classList.remove('hidden');
    } else {
        mobileNav.classList.add('hidden');
    }
})

mobileNav.addEventListener('click', (e) => {
    if (e.target.classList.contains('header__mobile-nav-link') || e.target.classList.contains('header__mobile-button')) {
        // e.preventDefault();
        mobileNav.classList.add('hidden');     
    }
})

mediaQueryChange.addEventListener('change', () => {
    if (!mobileNav.classList.contains('hidden')) {
        mobileNav.classList.add('hidden');
    }
})

