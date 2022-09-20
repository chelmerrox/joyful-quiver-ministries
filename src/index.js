import './style.css';

/* Variable Declarations */
const hamburger = document.querySelector('.hamburger');
const navMenuMobile = document.querySelector('.nav-menu-mobile');

/* Function Declarations */
function openMenu() {
  hamburger.classList.toggle('active');
  navMenuMobile.classList.toggle('active');
}

function closeMenu() {
  hamburger.classList.remove('active');
  navMenuMobile.classList.remove('active');
}

// Open Nav Menu for touchstart
hamburger.addEventListener('click', openMenu);

// Close Nav Menu for touchend
document.querySelectorAll('.nav-link-mobile').forEach((n) => n.addEventListener('click', closeMenu))