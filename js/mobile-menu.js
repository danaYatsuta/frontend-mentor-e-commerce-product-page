export default function initializeMobileMenu() {
  const body = document.querySelector('body');
  const menu = document.querySelector('#mobile-menu');
  const openButton = document.querySelector('#open-mobile-menu-button');
  const closeButton = document.querySelector('#close-mobile-menu-button');

  openButton.addEventListener('click', () => {
    menu.style.removeProperty('display');
    body.style.setProperty('overflow', 'hidden');
  });

  closeButton.addEventListener('click', () => {
    menu.style.setProperty('display', 'none');
    body.style.removeProperty('overflow');
  });
}
