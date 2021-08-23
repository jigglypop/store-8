import { useEffect } from 'react';
import { RootState } from '@client/store';
import { getProduct } from '@client/store/product/product';
import { ICartAddData } from '@middle/type/cart/cart';
import { cartAddApi } from '@api/cart';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from '../router/router';

export function useProduct() {
  const {
    router: { params },
  } = useRouter();

  const productId = +params;

  const { product, loading, error } = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  // 페이지 시작
  useEffect(() => {
    dispatch(getProduct(productId));
  }, []);

  const addCart = async ({ productId, productOptionId, productCount }: ICartAddData) => {
    // TODO: UserId 사용 빼기
    const result = await cartAddApi({ userId: 1, productId, productOptionId, productCount });
    return result;
  };

  return { product, loading, error, addCart };
}
