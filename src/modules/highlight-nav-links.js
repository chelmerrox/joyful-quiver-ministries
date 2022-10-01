import {
  navMenuMobileLinks,
  navDesktopLinks
} from './variable-declarations.js';

const highlightNavLinks = () => {
  navMenuMobileLinks[0].classList.remove('active-1'); // Home navbar mobile link
  navMenuMobileLinks[2].style.removeProperty('border-bottom'); // About navbar mobile link
  navMenuMobileLinks[2].style.removeProperty('padding-bottom');
  navMenuMobileLinks[1].style.borderBottom = '2px solid black'; // Booking navbar mobile link
  navMenuMobileLinks[1].style.paddingBottom = '7px';
  navDesktopLinks[0].classList.remove('active-1'); // Home navbar desktop button
  navDesktopLinks[2].style.removeProperty('border'); // About navbar desktop button
  navDesktopLinks[2].style.removeProperty('color');
  navDesktopLinks[1].style.border = '2px solid yellow'; // Booking navbar desktop button
  navDesktopLinks[1].style.color = 'yellow';
};

export default highlightNavLinks;