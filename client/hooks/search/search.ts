import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@client/store';
import { useEffect } from 'react';
import { getSearch } from '@client/store/search/search';

export function useSearch() {
  const { router } = useSelector((state: RootState) => state.router);
  const { search } = useSelector((state: RootState) => state.search);

  const dispatch = useDispatch();
  // 페이지 시작
  useEffect(() => {
    dispatch(getSearch(`/0/?${router.query}`));
  }, []);
  return { search };
}
