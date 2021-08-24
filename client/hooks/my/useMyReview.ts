import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@client/store';
import { getMyReview, setPage } from '@client/store/my/myReview';
import cache from '@client/utils/cache';

export function useMyReview() {
  const dispatch = useDispatch();

  const { review, currentPage, error, loading } = useSelector((state: RootState) => state.review);

  const setCurrentPage = (newPage: number) => {
    dispatch(setPage(newPage));
    dispatch(getMyReview({ query: `page=${newPage}`, token: cache.get('token') }));
  };

  // 페이지 시작
  useEffect(() => {
    dispatch(getMyReview({ query: `page=${currentPage}`, token: cache.get('token') }));
  }, []);

  return {
    totalCount: review?.totalCount ?? 0,
    myReviews: review?.reviews ?? [],
    loading,
    error,
    currentPage,
    setCurrentPage,
  };
}
