import { useEffect } from 'react';
import { RootState } from '@store/index';
import {
  getProduct,
  setCountState,
  setOptionCountState,
  deleteOptionCountState,
  initProduct,
} from '@store/product/product';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from '../router/router';

export function useProduct() {
  const {
    router: { params },
  } = useRouter();

  const productId = +params;

  const { product, loading, error, count, optionCount } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch = useDispatch();

  const setCount = (count: number) => {
    if (count < 0) return;
    if (count >= 100) count = 100;
    dispatch(setCountState(count));
  };

  const setOptionCount = (optionId: number, count: number) => {
    dispatch(setOptionCountState({ optionId, count }));
  };

  const deleteOptionCount = (optionId: number) => {
    dispatch(deleteOptionCountState(optionId));
  };

  // 페이지 시작
  useEffect(() => {
    dispatch(getProduct(productId));
    return () => {
      dispatch(initProduct());
    };
  }, []);

  return {
    product,
    loading,
    error,
    count,
    setCount,
    optionCount: optionCount ?? {},
    setOptionCount,
    deleteOptionCount,
  };
}
