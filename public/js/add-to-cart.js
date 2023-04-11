export default function initalizeAddToCart() {
  const quantityCounter = document.querySelector('#quantity-counter');
  const decrementQuantityButton = document.querySelector('#decrement-quantity-button');
  const incrementQuantityButton = document.querySelector('#increment-quantity-button');
  const addToCartButton = document.querySelector('#add-to-cart-button');

  decrementQuantityButton.addEventListener('click', () => {
    quantityCounter.textContent = Math.max(0, quantityCounter.textContent - 1);
  });

  incrementQuantityButton.addEventListener('click', () => {
    quantityCounter.textContent = parseInt(quantityCounter.textContent, 10) + 1;
  });

  addToCartButton.addEventListener('click', () => {
    quantityCounter.textContent = 0;
  });
}
