import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@client/store';
import { getMyReview, setPage } from '@client/store/my/myReview';
import cache from '@client/utils/cache';

export function useMyReview() {
  const dispatch = useDispatch();

  const { myReview, currentPage, error, loading } = useSelector(
    (state: RootState) => state.myReview
  );

  const setCurrentPage = (newPage: number) => {
    dispatch(setPage(newPage));
    dispatch(getMyReview({ query: `page=${newPage}`, token: cache.get('token') }));
  };

  // 페이지 시작
  useEffect(() => {
    dispatch(getMyReview({ query: `page=${currentPage}`, token: cache.get('token') }));
  }, []);

  return {
    totalCount: myReview?.totalCount ?? 0,
    myReviews: myReview?.reviews ?? [],
    loading,
    error,
    currentPage,
    setCurrentPage,
  };
}
