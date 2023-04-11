export default class Cart {
  constructor() {
    this.cartItems = [];

    this.cart = document.querySelector('#cart');
    this.cartCheckbox = document.querySelector('#cart-checkbox');
    this.cartEmpty = document.querySelector('#cart-empty');
    this.cartFilled = document.querySelector('#cart-filled');
    this.cartList = document.querySelector('#cart-list');

    this.cartCheckbox.addEventListener('click', () => {
      if (this.cartCheckbox.checked) {
        this.cart.style.removeProperty('display');
      } else {
        this.cart.style.setProperty('display', 'none');
      }
    });
  }

  updateCartList() {
    if (this.cartItems === []) {
      this.cartFilled.style.setProperty('display', 'none');
      this.cartEmpty.style.removeProperty('display');
    } else {
      this.cartFilled.style.removeProperty('display');
      this.cartEmpty.style.setProperty('display', 'none');

      this.cartList.innerHTML = '';
      this.cartItems.forEach((cartItem) => {
        const { item, quantity } = cartItem;

        /* prettier-ignore */
        this.cartList.insertAdjacentHTML(
          'beforeend',
          `
          <li class="flex h-14 items-center justify-between gap-2">
            <img
              src="${item.thumbnail}"
              alt="Product thumbnail"
              class="h-full rounded-md"
            />

            <div class="flex flex-col justify-between py-1">
              <div>${item.name}</div>
              <div>
                <span>$${parseFloat(item.priceInUsd).toFixed(2)}</span> <span>x ${quantity}</span>
                <span class="font-bold text-very-dark-blue">$${parseFloat(item.priceInUsd * quantity).toFixed(2)}</span>
              </div>
            </div>

            <button>
              <img src="./images/icon-delete.svg" alt="Trashcan icon" />
            </button>
          </li>
          `,
        );
      });
    }
  }

  addCartItem(newCartItem) {
    this.cartItems.push(newCartItem);
    this.updateCartList();
  }

  removeCartItem(cartItemId) {
    this.cartItems = this.cartItems.filter(
      (cartItem) => cartItem.id !== cartItemId,
    );
  }

  openCart() {
    this.cartCheckbox.checked = true;
    this.cart.style.removeProperty('display');
  }
}
