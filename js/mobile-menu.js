export default function initializeMobileMenu() {
  const body = document.querySelector('body');
  const menu = document.querySelector('#mobile-menu');
  const openButton = document.querySelector('#open-mobile-menu-button');
  const closeButton = document.querySelector('#close-mobile-menu-button');

  let menuOpen = false;

  openButton.addEventListener('click', () => {
    menu.style.removeProperty('display');
    setTimeout(() => {
      menu.classList.add('bg-opacity-75');
      menu.classList.remove('bg-opacity-0');
      menu.firstElementChild.classList.remove('-translate-x-full');
    }, 0);
    body.style.setProperty('overflow', 'hidden');

    menuOpen = true;
  });

  closeButton.addEventListener('click', () => {
    menu.classList.add('bg-opacity-0');
    menu.classList.remove('bg-opacity-75');
    menu.firstElementChild.classList.add('-translate-x-full');
    body.style.removeProperty('overflow');

    menuOpen = false;
  });

  menu.addEventListener('transitionend', () => {
    if (!menuOpen) {
      menu.style.setProperty('display', 'none');
    }
  });
}
