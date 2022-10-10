import {
  sectionOne,
  homepageSection,
  bookingSection,
  aboutSection,
  sectionTwo,
  footerOne,
  footerTwo,
} from './variable-declarations.js';

const renderAboutSection = () => {
  sectionOne.classList.add('active-3');
  sectionOne.classList.remove('active-1');
  sectionOne.classList.remove('active-2');
  homepageSection.classList.add('hidden');
  bookingSection.classList.add('hidden');
  bookingSection.classList.remove('d-flex', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'flex-column', 'flex-sm-column', 'flex-md-column', 'flex-lg-row');
  bookingSection.classList.remove('align-items-center', 'align-items-sm-center', 'align-items-md-center', 'justify-content-lg-around', 'mt-5');
  aboutSection.classList.remove('hidden');
  aboutSection.classList.add('d-flex', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'flex-column', 'flex-sm-column', 'flex-md-column', 'flex-lg-column');
  aboutSection.classList.add('align-items-center', 'align-items-sm-center', 'align-items-md-center', 'align-items-lg-center', 'mt-3');
  sectionTwo.classList.add('hidden');
  sectionTwo.classList.remove('active-1', 'row', 'px-3', 'py-4');
  footerOne.classList.add('active-1', 'bg-yellow', 'd-flex', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'flex-row', 'flex-sm-row', 'flex-md-row', 'flex-lg-row');
  footerOne.classList.add('justify-content-around', 'justify-content-sm-around', 'justify-content-md-around', 'justify-content-lg-around', 'align-items-center');
  footerOne.classList.remove('hidden');
  footerTwo.classList.add('hidden');
  footerTwo.classList.remove('active-2', 'bg-yellow', 'd-flex', 'd-sm-flex', 'd-md-flex', 'd-lg-flex', 'flex-row', 'flex-sm-row', 'flex-md-row', 'flex-lg-row');
  footerTwo.classList.remove('justify-content-around', 'justify-content-sm-around', 'justify-content-md-around', 'justify-content-lg-around', 'align-items-center');
};

export default renderAboutSection;