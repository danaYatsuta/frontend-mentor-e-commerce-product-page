export default function initalizeCart() {
  const cart = document.querySelector('#cart');
  const cartCheckbox = document.querySelector('#cart-checkbox');

  cartCheckbox.addEventListener('click', () => {
    if (cartCheckbox.checked) {
      cart.style.removeProperty('display');
    } else {
      cart.style.setProperty('display', 'none');
    }
  });
}
