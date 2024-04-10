/* Variable Declarations */
export const hamburger = document.querySelector('.hamburger');
const navMenuMobile = document.querySelector('.nav-menu-mobile');

/* Function Declarations */
export const openMenu = () => {
  hamburger.classList.toggle('active');
  navMenuMobile.classList.toggle('active');
};

export const closeMenu = () => {
  hamburger.classList.remove('active');
  navMenuMobile.classList.remove('active');
};