import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@client/store';

import { useRouter } from '../router/router';
import { getReview } from '@client/store/product/review';

type IFetchType = 'create' | 'update' | 'delete';

export function useReview() {
  const {
    router: { params },
  } = useRouter();

  const productId = +params;
  const dispatch = useDispatch();

  const { review, error, loading } = useSelector((state: RootState) => state.review);

  // 페이지 시작
  useEffect(() => {
    dispatch(getReview(productId));
  }, []);

  return {
    review: review ?? [],
    loading: false,
    error: '',
  };
}
