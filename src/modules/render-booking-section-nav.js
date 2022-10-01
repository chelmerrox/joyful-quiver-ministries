import {
  sectionOne,
  homepageSection,
  bookingSection,
  aboutSection,
  sectionTwo,
  footerOne,
  footerTwo
} from './variable-declarations.js';

const renderBookingSection = () => {
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
  footerTwo.classList.add('active-2', 'bg-yellow', 'd-flex', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'flex-row', 'flex-sm-row', 'flex-md-row', 'flex-lg-row');
  footerTwo.classList.add('justify-content-around', 'justify-content-sm-around', 'justify-content-md-around', 'justify-content-lg-around', 'align-items-center');
};

export default renderBookingSection;