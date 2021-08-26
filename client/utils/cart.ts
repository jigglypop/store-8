import cache from './cache';

interface LocalCartData {
  productId: number;
  productOptionId: number | null;
  productCount: number;
}

const CART_KEY = 'LOCALSTORAGE_CART';
const localCart = {
  get: () => {
    try {
      return cache.get(CART_KEY).data;
    } catch {
      return [];
    }
  },
  init: () => {
    cache.set(CART_KEY, { data: [] });
  },
  remove: (indexes: number[]) => {
    try {
      const localCartData = cache.get(CART_KEY).data;
      const result: LocalCartData[] = [];
      localCartData.forEach((element: LocalCartData, index: number) => {
        if (!indexes.includes(index)) result.push(element);
      });
      cache.set(CART_KEY, { data: result });
    } catch {
      cache.set(CART_KEY, { data: [] });
    }
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
