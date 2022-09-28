import './style.css';
import { hamburger, openMenu, closeMenu } from './modules/mobile-menu.js';
import { navMenuMobileLinks, 
  sectionOne, 
  homepageSection,
  bookASessionBtn, 
  bookingSection, 
  aboutSection, 
  sectionTwo, 
  footerOne, 
  footerTwo } from './modules/mobile-menu-and-sections';

// Open Nav Menu for click
hamburger.addEventListener('click', openMenu);

// Close Nav Menu for click
document.querySelectorAll('.nav-link-mobile').forEach((n) => n.addEventListener('click', closeMenu));

// Clicking on the navbar mobile menu links to show specific sections
navMenuMobileLinks.forEach((link, i) => {
  link.addEventListener('click', () => {
    // Clicking the Home nav mobile menu link shows the homepage section
    if (i === 0){
      sectionOne.classList.add('active-1');
      sectionOne.classList.remove('active-2');
      sectionOne.classList.remove('active-3');
      homepageSection.classList.remove('hidden');
      bookingSection.classList.add('hidden');
      bookingSection.classList.remove('d-flex', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'flex-column', 'flex-sm-column', 'flex-md-column', 'flex-lg-row');
      bookingSection.classList.remove('align-items-center', 'align-items-sm-center', 'align-items-md-center', 'justify-content-lg-around', 'mt-5');
      aboutSection.classList.add('hidden');
      aboutSection.classList.remove('d-flex', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'flex-column', 'flex-sm-column', 'flex-md-column', 'flex-lg-column');
      aboutSection.classList.remove('align-items-center', 'align-items-sm-center', 'align-items-md-center', 'align-items-lg-center', 'mt-5');
      sectionTwo.classList.remove('hidden');
      sectionTwo.classList.add('active-1', 'row', 'px-3', 'py-4');
      footerOne.classList.add('active-1', 'bg-yellow', 'd-flex', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'flex-row', 'flex-sm-row', 'flex-md-row', 'flex-lg-row');
      footerOne.classList.add('justify-content-around', 'justify-content-sm-around', 'justify-content-md-around', 'justify-content-lg-around', 'align-items-center');
      footerOne.classList.remove('hidden');
      footerTwo.classList.add('hidden');
      footerTwo.classList.remove('active-2','bg-yellow', 'd-flex', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'flex-row', 'flex-sm-row', 'flex-md-row', 'flex-lg-row');
      footerTwo.classList.remove('justify-content-around', 'justify-content-sm-around', 'justify-content-md-around', 'justify-content-lg-around', 'align-items-center');
    } else if (i === 1) { // Clicking the Booking nav mobile menu link shows the booking section
      sectionOne.classList.add('active-2');
      sectionOne.classList.remove('active-1');
      sectionOne.classList.remove('active-3');
      homepageSection.classList.add('hidden');
      bookingSection.classList.remove('hidden');
      bookingSection.classList.add('d-flex', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'flex-column', 'flex-sm-column', 'flex-md-column', 'flex-lg-row');
      bookingSection.classList.add('align-items-center', 'align-items-sm-center', 'align-items-md-center', 'justify-content-lg-around', 'mt-5');
      aboutSection.classList.add('hidden');
      aboutSection.classList.remove('d-flex', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'flex-column', 'flex-sm-column', 'flex-md-column', 'flex-lg-column');
      aboutSection.classList.remove('align-items-center', 'align-items-sm-center', 'align-items-md-center', 'align-items-lg-center', 'mt-5');
      sectionTwo.classList.add('hidden');
      sectionTwo.classList.remove('active-1', 'row', 'px-3', 'py-4');
      footerOne.classList.remove('active-1', 'bg-yellow', 'd-flex', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'flex-row', 'flex-sm-row', 'flex-md-row', 'flex-lg-row');
      footerOne.classList.remove('justify-content-around', 'justify-content-sm-around', 'justify-content-md-around', 'justify-content-lg-around', 'align-items-center');
      footerOne.classList.add('hidden');
      footerTwo.classList.remove('hidden');
      footerTwo.classList.add('active-2','bg-yellow', 'd-flex', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'flex-row', 'flex-sm-row', 'flex-md-row', 'flex-lg-row');
      footerTwo.classList.add('justify-content-around', 'justify-content-sm-around', 'justify-content-md-around', 'justify-content-lg-around', 'align-items-center');
    } else if (i === 2) { // Clicking the About Us nav mobile menu link shows the About section
      sectionOne.classList.add('active-3');
      sectionOne.classList.remove('active-1');
      sectionOne.classList.remove('active-2');
      homepageSection.classList.add('hidden');
      bookingSection.classList.add('hidden');
      bookingSection.classList.remove('d-flex', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'flex-column', 'flex-sm-column', 'flex-md-column', 'flex-lg-row');
      bookingSection.classList.remove('align-items-center', 'align-items-sm-center', 'align-items-md-center', 'justify-content-lg-around', 'mt-5');
      aboutSection.classList.remove('hidden');
      aboutSection.classList.add('d-flex', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'flex-column', 'flex-sm-column', 'flex-md-column', 'flex-lg-column');
      aboutSection.classList.add('align-items-center', 'align-items-sm-center', 'align-items-md-center', 'align-items-lg-center', 'mt-5');
      sectionTwo.classList.add('hidden');
      sectionTwo.classList.remove('active-1', 'row', 'px-3', 'py-4');
      footerOne.classList.add('active-1', 'bg-yellow', 'd-flex', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'flex-row', 'flex-sm-row', 'flex-md-row', 'flex-lg-row');
      footerOne.classList.add('justify-content-around', 'justify-content-sm-around', 'justify-content-md-around', 'justify-content-lg-around', 'align-items-center');
      footerOne.classList.remove('hidden');
      footerTwo.classList.add('hidden');
      footerTwo.classList.remove('active-2','bg-yellow', 'd-flex', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'flex-row', 'flex-sm-row', 'flex-md-row', 'flex-lg-row');
      footerTwo.classList.remove('justify-content-around', 'justify-content-sm-around', 'justify-content-md-around', 'justify-content-lg-around', 'align-items-center');
    }
  });
});

// Clicking the Book a Session button links to the Booking Section
bookASessionBtn.addEventListener('click', () => {
  sectionOne.classList.add('active-2');
  sectionOne.classList.remove('active-1');
  sectionOne.classList.remove('active-3');
  homepageSection.classList.add('hidden');
  bookingSection.classList.remove('hidden');
  bookingSection.classList.add('d-flex', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'flex-column', 'flex-sm-column', 'flex-md-column', 'flex-lg-row');
  bookingSection.classList.add('align-items-center', 'align-items-sm-center', 'align-items-md-center', 'justify-content-lg-around', 'mt-5');
  aboutSection.classList.add('hidden');
  aboutSection.classList.remove('d-flex', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'flex-column', 'flex-sm-column', 'flex-md-column', 'flex-lg-column');
  aboutSection.classList.remove('align-items-center', 'align-items-sm-center', 'align-items-md-center', 'align-items-lg-center', 'mt-5');
  sectionTwo.classList.add('hidden');
  sectionTwo.classList.remove('active-1', 'row', 'px-3', 'py-4');
  footerOne.classList.remove('active-1', 'bg-yellow', 'd-flex', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'flex-row', 'flex-sm-row', 'flex-md-row', 'flex-lg-row');
  footerOne.classList.remove('justify-content-around', 'justify-content-sm-around', 'justify-content-md-around', 'justify-content-lg-around', 'align-items-center');
  footerOne.classList.add('hidden');
  footerTwo.classList.remove('hidden');
  footerTwo.classList.add('active-2','bg-yellow', 'd-flex', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'flex-row', 'flex-sm-row', 'flex-md-row', 'flex-lg-row');
  footerTwo.classList.add('justify-content-around', 'justify-content-sm-around', 'justify-content-md-around', 'justify-content-lg-around', 'align-items-center');
});
