import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@client/store';
import { useEffect } from 'react';
import {
  changeSearchItem,
  getSearch,
  initSearch,
  setSearchTitle,
} from '@client/store/search/search';
import { IElastic } from '@middle/type/elastic/elastic';

export function useSearch() {
  const { router } = useSelector((state: RootState) => state.router);
  const { search, title } = useSelector((state: RootState) => state.search);
  const { elastic } = useSelector((state: RootState) => state.elastic);

  const dispatch = useDispatch();
  // 페이지 시작
  useEffect(() => {
    dispatch(getSearch(`/0/?${router.query}`));
    return () => {
      dispatch(initSearch());
    };
  }, []);
  // 라우터
  useEffect(() => {
    if (router.pathname === 'search' && elastic && elastic.length !== 0) {
      const searchObj = {
        search: {
          count: elastic.length,
          pages: 1,
          rows: elastic.map((item: IElastic) => {
            return item._source;
          }),
        },
      };
      dispatch(changeSearchItem(searchObj));
    }
  }, [router, elastic]);

  const onSearchTitle = (title: string) => {
    dispatch(
      setSearchTitle({
        title: title,
      })
    );
  };
  return { search, title, onSearchTitle };
}
