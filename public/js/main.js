import initializeMobileMenu from './mobile-menu.js';
import initalizeLightbox from './lightbox.js';
import initializeImageView from './image-view.js';

initializeMobileMenu('#mobile-menu', '#open-menu-button', '#close-menu-button');
initalizeLightbox(
  '#lightbox',
  '#open-lightbox-button',
  '#close-lightbox-button',
  '#lightbox-image',
  '#previous-button-lightbox',
  '#next-button-lightbox',
);
initializeImageView('#product-image', '#previous-button', '#next-button');
