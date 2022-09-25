import './style.css';
import { hamburger, openMenu, closeMenu } from './modules/mobile-menu.js';

// Open Nav Menu for touchstart
hamburger.addEventListener('click', openMenu);

// Close Nav Menu for touchend
document.querySelectorAll('.nav-link-mobile').forEach((n) => n.addEventListener('click', closeMenu));