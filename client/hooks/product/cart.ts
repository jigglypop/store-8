import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCart, addCart } from '@store/product/cart';
import { ICartAddData } from '@middle/type/cart/cart';

export function useCart() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCart({ userId: 1 }));
  // }, []);

  const addToCart = async ({ productId, productOptionId, productCount }: ICartAddData) => {
    // TODO : userId 변경
    dispatch(addCart({ userId: 1, productId, productOptionId, productCount }));
  };

  return { addToCart };
}
