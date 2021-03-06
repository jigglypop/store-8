import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCart, addCart } from '@store/product/cart';
import { ICartAddData } from '@middle/type/cart/cart';

export function useCart() {
  const dispatch = useDispatch();

  const addToCart = async ({ productId, productOptionId, productCount }: ICartAddData) => {
    // TODO : userId 변경
    dispatch(addCart({ productId, productOptionId, productCount }));
  };

  return { addToCart };
}
