import initializeMobileMenu from './mobile-menu.js';
import initalizeLightbox from './lightbox.js';
import initalizeCart from './cart.js';
import ImageView from './image-view.js';

initializeMobileMenu();
initalizeCart();

const mainImageView = new ImageView(
  '#product-image',
  '#previous-button',
  '#next-button',
  'product-image',
);

initalizeLightbox(mainImageView);
