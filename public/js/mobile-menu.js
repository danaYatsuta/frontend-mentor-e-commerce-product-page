export default function initializeMobileMenu() {
  const body = document.querySelector('body');
  const menu = document.querySelector('#mobile-menu');
  const openButton = document.querySelector('#open-mobile-menu-button');
  const closeButton = document.querySelector('#close-mobile-menu-button');

  openButton.addEventListener('click', () => {
    menu.style.removeProperty('display');
    setTimeout(() => {
      menu.classList.add('bg-opacity-75');
      menu.classList.remove('bg-opacity-0');
      menu.firstElementChild.classList.remove('-translate-x-full');
    }, 0);
    body.style.setProperty('overflow', 'hidden');
  });

  closeButton.addEventListener('click', () => {
    menu.classList.add('bg-opacity-0');
    menu.classList.remove('bg-opacity-75');
    menu.firstElementChild.classList.add('-translate-x-full');
    body.style.removeProperty('overflow');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      menu.style.setProperty('display', 'none');
    }
  });

  menu.addEventListener('transitionend', () => {
    if (menu.classList.contains('bg-opacity-0')) {
      menu.style.setProperty('display', 'none');
    }
  });
}
