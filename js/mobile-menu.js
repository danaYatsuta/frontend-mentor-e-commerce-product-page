export default function initializeMobileMenu(
  menuSelector,
  openButtonSelector,
  closeButtonSelector,
) {
  const menu = document.querySelector(menuSelector);
  const openButton = document.querySelector(openButtonSelector);
  const closeButton = document.querySelector(closeButtonSelector);

  const body = document.querySelector('body');

  openButton.addEventListener('click', () => {
    menu.style.removeProperty('display');
    body.style.overflow = 'hidden';
  });

  closeButton.addEventListener('click', () => {
    menu.style.display = 'none';
    body.style.removeProperty('overflow');
  });
}
