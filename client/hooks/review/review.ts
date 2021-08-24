import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@client/store';

import { useRouter } from '../router/router';
import { getReview, setError, setPage } from '@client/store/product/review';
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
import cache from '@client/utils/cache';
import { getMyReview } from '@client/store/my/myReview';

type IFetchType = 'create' | 'update' | 'delete';

export function useReview() {
  const {
    router: { params },
  } = useRouter();

  const productId = +params;
  const dispatch = useDispatch();

  const { review, currentPage, error, loading } = useSelector((state: RootState) => state.review);
  const { currentPage: myReviewpage } = useSelector((state: RootState) => state.myReview);

  const fetchReview =
    <T>(type: IFetchType) =>
    async (reviewForm: T): Promise<boolean> => {
      let res;

      if (type === 'create') res = await createReviewApi<T>(productId, reviewForm);
      if (type === 'update') res = await updateReviewApi<T>(reviewForm);
      if (type === 'delete') res = await deleteReviewApi<T>(reviewForm);

      if (!res) return false;

      if (!res.success) {
        dispatch(setError(res.errorMessage));
        return false;
      }

      dispatch(getMyReview({ query: `page=${myReviewpage}`, token: cache.get('token') }));
      dispatch(getReview({ productId, query: `page=${currentPage}`, token: cache.get('token') }));

      return true;
    };

  const likeReview = async (reviewId: number, reviewLikeForm: IReviewLikeReq): Promise<boolean> => {
    const res = await likeReviewApi(reviewId, reviewLikeForm);
    if (!res) return false;

    if (!res.success) {
      dispatch(setError(res.errorMessage));
      return false;
    }

    dispatch(getMyReview({ query: `page=${myReviewpage}`, token: cache.get('token') }));
    dispatch(getReview({ productId, query: `page=${currentPage}`, token: cache.get('token') }));

    return true;
  };

  const setCurrentPage = (newPage: number) => {
    dispatch(setPage(newPage));
    dispatch(getReview({ productId, query: `page=${newPage}`, token: cache.get('token') }));
  };

  // 페이지 시작
  useEffect(() => {
    dispatch(getReview({ productId, query: `page=${currentPage}`, token: cache.get('token') }));
  }, []);

  return {
    totalCount: review?.totalCount ?? 0,
    reviews: review?.reviews ?? [],
    loading,
    error,
    currentPage,
    setCurrentPage,
    createReview: fetchReview<IReviewPostReq>('create'),
    updateReview: fetchReview<IReviewPutReq>('update'),
    deleteReview: fetchReview<IReviewDeleteReq>('delete'),
    likeReview,
  };
}
