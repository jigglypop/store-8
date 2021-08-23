import { useEffect } from 'react';
import { RootState } from '@client/store';
import { getProduct } from '@client/store/product/product';

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

  return { product, loading, error };
}
