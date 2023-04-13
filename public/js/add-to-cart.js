import items from './items.js';
import CartEntry from './cart-entry.js';

export default function initalizeAddToCart(cart, itemId) {
  const quantityCounter = document.querySelector('#quantity-counter');
  const decrementQuantityButton = document.querySelector(
    '#decrement-quantity-button',
  );
  const incrementQuantityButton = document.querySelector(
    '#increment-quantity-button',
  );
  const addToCartButton = document.querySelector('#add-to-cart-button');

  decrementQuantityButton.addEventListener('click', () => {
    quantityCounter.textContent = Math.max(0, quantityCounter.textContent - 1);
  });

  incrementQuantityButton.addEventListener('click', () => {
    quantityCounter.textContent = parseInt(quantityCounter.textContent, 10) + 1;
  });

  addToCartButton.addEventListener('click', () => {
    if (parseInt(quantityCounter.textContent, 10) !== 0) {
      const newCartEntry = new CartEntry(
        items.find((item) => item.id === itemId),
        parseInt(quantityCounter.textContent, 10),
      );
      cart.addCartEntry(newCartEntry);

      cart.openCartExternally();

      quantityCounter.textContent = 0;
    }
  });
}
