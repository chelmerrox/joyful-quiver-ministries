import './style.css';
import { hamburger, openMenu, closeMenu } from './modules/mobile-menu.js';
// import BackgroundImg1 from './images/background-1-1-1.png';

/* Variable declarations */
const sectionOne = document.querySelector('.section-1');
const paragraphOne = document.querySelector('.paragraph-1');
const beFreeText = document.querySelector('.be-free-text');

// Open Nav Menu for click
hamburger.addEventListener('click', openMenu);

// Close Nav Menu for click
document.querySelectorAll('.nav-link-mobile').forEach((n) => n.addEventListener('click', closeMenu));

const navMenuMobileLinks = Array.from(document.getElementsByClassName('nav-link-mobile'));

navMenuMobileLinks.forEach((link, i) => {
  link.addEventListener('click', (e) => {
    if (i === 0){
      sectionOne.style.backgroundImage = 'url("./images/background-1-1-1.png")';
      sectionOne.backgroundPosition = 'center';
      sectionOne.backgroundRepeat = 'no-repeat';
      sectionOne.backgroundSize =  'contain';
      paragraphOne.classList.add('active');
      beFreeText.classList.add('active');

    } else if (i === 1) {
      sectionOne.style.backgroundImage = 'url("./images/background-2.png")';
      paragraphOne.classList.remove('active');
      beFreeText.classList.remove('active');
    } else {
      
    }
  });
});