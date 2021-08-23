import { useEffect } from 'react';
import { RootState } from '@client/store';
import { getProduct, setCountState, setOptionCountState } from '@client/store/product/product';

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

  const setOptionCount = (optionCount: { [key: string]: number }) => {
    for (const count of Object.values(optionCount)) {
      if (count < 0) return;
    }

    for (const option in optionCount) {
      if (optionCount[option] >= 100) optionCount[option] = 100;
    }

    dispatch(setOptionCountState(optionCount));
  };

  // 페이지 시작
  useEffect(() => {
    dispatch(getProduct(productId));
  }, []);

  return { product, loading, error, count, setCount, optionCount, setOptionCount };
}
