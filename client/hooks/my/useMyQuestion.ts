import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@client/store';
import { getMyQuestion, setPage } from '@client/store/my/myQuestion';
import cache from '@client/utils/cache';

export function useMyQuestion() {
  const { myQuestion, loading, error, currentPage } = useSelector(
    (state: RootState) => state.myQuestion
  );
  const dispatch = useDispatch();

  const setCurrentPage = (newPage: number) => {
    dispatch(setPage(newPage));
    dispatch(getMyQuestion({ query: `page=${newPage}`, token: cache.get('token') }));
  };

  // 페이지 시작
  useEffect(() => {
    dispatch(getMyQuestion({ query: `page=${currentPage}`, token: cache.get('token') }));
  }, []);

  return {
    totalCount: myQuestion?.totalCount ?? 0,
    myQuestions: myQuestion?.questions ?? [],
    loading,
    error,
    currentPage,
    setCurrentPage,
  };
}
