import initializeMobileMenu from './mobile-menu.js';
import initalizeLightbox from './lightbox.js';
import initalizeAddToCart from './add-to-cart.js';
import ImageView from './image-view.js';
import Cart from './cart.js';

initializeMobileMenu();

const mainImageView = new ImageView(
  '#product-image',
  '#previous-button',
  '#next-button',
  'product-image',
);

initalizeLightbox(mainImageView);

const cart = new Cart();
initalizeAddToCart(cart, 1);
