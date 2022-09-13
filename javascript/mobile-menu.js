const hamburger = document.querySelector('.hamburger-button')
const mobileOverlay = document.querySelector('.menu-overlay')
const menuList = document.querySelector('.menu-list-mobile')
const closeMobileMenu = document.querySelector('.close-menu-button')

hamburger.addEventListener('click', () => {
  hamburger.style.display = 'none';
  mobileOverlay.style.display = 'block';
  menuList.style.display = 'block';
});

closeMobileMenu.addEventListener('click', () => {
  hamburger.style.display = 'block';
  mobileOverlay.style.display = 'none';
  menuList.style.display = 'none';
});

menuList.addEventListener('click', () => {
  hamburger.style.display = 'block';
  mobileOverlay.style.display = 'none';
  menuList.style.display = 'none';
});
