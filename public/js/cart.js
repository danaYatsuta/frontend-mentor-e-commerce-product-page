export default class Cart {
  constructor() {
    this.cartEntries = [];

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
    if (this.cartEntries.length === 0) {
      this.cartFilled.style.setProperty('display', 'none');
      this.cartEmpty.style.removeProperty('display');
    } else {
      this.cartFilled.style.removeProperty('display');
      this.cartEmpty.style.setProperty('display', 'none');

      this.cartList.innerHTML = '';
      this.cartEntries.forEach((cartEntry) => {
        const newCartListItem = document.createElement('div');
        const { item, quantity } = cartEntry;

        /* prettier-ignore */
        newCartListItem.innerHTML = `
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
          `.trim();

        const deleteCartEntryButton = newCartListItem.querySelector('button');

        deleteCartEntryButton.addEventListener('click', () => {
          this.removeCartEntryByItem(cartEntry.item);
        });

        this.cartList.appendChild(newCartListItem.firstChild);
      });
    }
  }

  addCartEntry(newCartEntry) {
    const existingCartItem = this.cartEntries.find(
      (cartEntry) => cartEntry.item === newCartEntry.item,
    );

    if (existingCartItem) {
      existingCartItem.quantity += newCartEntry.quantity;
    } else {
      this.cartEntries.push(newCartEntry);
    }

    this.updateCartList();
  }

  removeCartEntryByItem(item) {
    this.cartEntries = this.cartEntries.filter(
      (cartEntry) => cartEntry.item !== item,
    );

    this.updateCartList();
  }

  openCart() {
    this.cartCheckbox.checked = true;
    this.cart.style.removeProperty('display');
  }
}
