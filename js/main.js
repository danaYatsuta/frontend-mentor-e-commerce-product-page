import initializeMobileMenu from './mobile-menu.js';
import initalizeLightbox from './lightbox.js';
import ImageView from './image-view.js';

initializeMobileMenu();

const mainImageView = new ImageView(
  '#product-image',
  '#previous-button',
  '#next-button',
  'product-image',
);

initalizeLightbox(mainImageView);
