import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@client/store';

import { useRouter } from '../router/router';
import { getReview, setError } from '@client/store/product/review';
import {
  createReviewApi,
  updateReviewApi,
  deleteReviewApi,
  likeReviewApi,
} from '@client/api/review';
import {
  IReviewPostReq,
  IReviewPutReq,
  IReviewDeleteReq,
  IReviewLikeReq,
} from '@middle/type/review/review';

type IFetchType = 'create' | 'update' | 'delete';

export function useReview() {
  const {
    router: { params },
  } = useRouter();

  const productId = +params;
  const dispatch = useDispatch();

  const { review, error, loading } = useSelector((state: RootState) => state.review);

  const fetchReview =
    <T>(type: IFetchType) =>
    async (reviewForm: T): Promise<boolean> => {
      let res;

      if (type === 'create') res = await createReviewApi<T>(productId, reviewForm);
      if (type === 'update') res = await updateReviewApi<T>(productId, reviewForm);
      if (type === 'delete') res = await deleteReviewApi<T>(productId, reviewForm);

      if (!res) return false;

      if (!res.success) {
        dispatch(setError(res.errorMessage));
        return false;
      }
      dispatch(getReview(productId));
      return true;
    };

  const likeReview = async (reviewId: number, reviewLikeForm: IReviewLikeReq): Promise<boolean> => {
    const res = await likeReviewApi(reviewId, reviewLikeForm);
    if (!res) return false;

    if (!res.success) {
      dispatch(setError(res.errorMessage));
      return false;
    }
    dispatch(getReview(productId));
    return true;
  };

  // 페이지 시작
  useEffect(() => {
    dispatch(getReview(productId));
  }, []);

  return {
    review: review ?? [],
    loading,
    error,
    createReview: fetchReview<IReviewPostReq>('create'),
    updateReview: fetchReview<IReviewPutReq>('create'),
    deleteReview: fetchReview<IReviewDeleteReq>('create'),
    likeReview,
  };
}
