import cache from './cache';

interface LocalCartData {
  productId: number;
  productOptionId: number | null;
  productCount: number;
}

const CART_KEY = 'LOCALSTORAGE_CART';
const localCart = {
  get: () => {
    return cache.get(CART_KEY).data;
  },
  init: () => {
    cache.set(CART_KEY, { data: [] });
  },
  add: (addCartData: LocalCartData) => {
    try {
      const localCartData = cache.get(CART_KEY).data;
      localCartData.push(addCartData);
      cache.set(CART_KEY, { data: localCartData });
    } catch {
      cache.set(CART_KEY, { data: [addCartData] });
    }
  },
};

export default localCart;
