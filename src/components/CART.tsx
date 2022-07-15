import { Product, ProductsList } from '../types/product.types';

const CART = {
  // init params
  KEY: 'CART_ITEMS',
  items: [] as Product[],

  // setup CART
  init() {
    const contents = localStorage.getItem(CART.KEY);
    if (contents) {
      CART.items = JSON.parse(contents);
    } else {
      CART.empty();
    }
  },

  // add items, last action
  async sync() {
    const cart = JSON.stringify(CART.items);
    await localStorage.setItem(CART.KEY, cart);
  },

  // check item id and pull product
  findItem(id: number) {
    const match = CART.items.filter((item: Product) => {
      if (item.productId == id) return true;
    });
    if (match && match[0]) return match[0];
  },

  addItem(PRODUCTS: ProductsList, id: number) {
    if (CART.findItem(id)) {
      CART.increaseItemQuantity(id, 1);
    } else {
      const arr = PRODUCTS.filter((product) => {
        if (product.productId == id) {
          return true;
        }
      });
      if (arr && arr[0]) {
        CART.items.push({ ...arr[0] });

        CART.sync();
      }
    }
  },

  increaseItemQuantity(id: number, quantity = 1) {
    CART.items = CART.items.map((item: Product) => {
      if (item.productId === id) item.quantity = item.quantity + quantity;
      return item;
    });

    CART.sync();
  },

  decreaseItemQuantity(id: number, quantity = 1) {
    CART.items = CART.items.map((item: Product) => {
      if (item.productId === id) item.quantity = item.quantity - quantity;
      return item;
    });
    CART.items.forEach(async (item: Product) => {
      if (item.productId === id && item.quantity === 0) await CART.remove(id);
    });

    CART.sync();
  },

  remove(id: number) {
    CART.items = CART.items.filter((item: Product) => {
      if (item.productId !== id) return true;
    });

    CART.sync();
  },

  getTotalPrice() {
    return CART.items.reduce((total: number, current: Product) => total + current.price * current.quantity, 0);
  },

  empty() {
    CART.items = [];

    CART.sync();
  },
};

export default CART;
