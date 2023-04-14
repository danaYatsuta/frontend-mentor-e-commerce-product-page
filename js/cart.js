export default class Cart {
  constructor() {
    this.cartEntries = [];

    this.cart = document.querySelector('#cart');
    this.cartCheckbox = document.querySelector('#cart-checkbox');
    this.cartCheckboxLabel = document.querySelector(
      'label[for="cart-checkbox"]',
    );
    this.cartEmpty = document.querySelector('#cart-empty');
    this.cartFilled = document.querySelector('#cart-filled');
    this.cartList = document.querySelector('#cart-list');

    this.cartCheckbox.addEventListener('click', () => {
      if (this.cartCheckbox.checked) {
        this.openCart();
      } else {
        this.closeCart();
      }
    });

    document.addEventListener('click', (e) => {
      if (
        !this.cart.contains(e.target) &&
        !this.cartCheckboxLabel.contains(e.target)
      ) {
        this.closeCartExternally();
      }
    });

    this.cart.addEventListener('transitionend', () => {
      if (this.cart.classList.contains('opacity-0')) {
        this.cart.style.setProperty('display', 'none');
      }
    });
  }

  openCart() {
    this.cart.style.removeProperty('display');
    setTimeout(() => {
      this.cart.classList.remove('opacity-0');
      this.cart.classList.remove('translate-y-2');
    }, 0);
  }

  closeCart() {
    this.cart.classList.add('opacity-0');
    this.cart.classList.add('translate-y-2');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.cart.style.setProperty('display', 'none');
    }
  }

  openCartExternally() {
    this.cartCheckbox.checked = true;
    this.openCart();
  }

  closeCartExternally() {
    this.cartCheckbox.checked = false;
    this.closeCart();
  }

  updateCartList() {
    if (this.cartEntries.length === 0) {
      this.cartFilled.style.setProperty('display', 'none');
      this.cartEmpty.style.removeProperty('display');
    } else {
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
              <svg
              width="14"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path
                    d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                    id="a"
                  />
                </defs>
                <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
              </svg>
            </button>
          </li>
          `.trim();

        const deleteCartEntryButton = newCartListItem.querySelector('button');

        deleteCartEntryButton.addEventListener('click', () => {
          this.removeCartEntryByItem(cartEntry.item);
        });

        this.cartList.appendChild(newCartListItem.firstChild);
      });

      this.cartFilled.style.removeProperty('display');
      this.cartEmpty.style.setProperty('display', 'none');
    }
  }

  addCartEntry(newCartEntry) {
    const existingCartEntry = this.cartEntries.find(
      (cartEntry) => cartEntry.item === newCartEntry.item,
    );

    if (existingCartEntry) {
      existingCartEntry.quantity += newCartEntry.quantity;
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
}
