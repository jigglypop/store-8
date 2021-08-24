import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@client/store';
import { useEffect } from 'react';
import { getElastic, initElastic } from '@client/store/elastic/elastic';

export function useElastic() {
  const { router } = useSelector((state: RootState) => state.router);
  const { elastic } = useSelector((state: RootState) => state.elastic);

  const dispatch = useDispatch();
  // 엘라스틱 서치 검색
  const onElastic = (query: string) => {
    dispatch(getElastic(`/?title=${query}`));
  };
  return { elastic, onElastic };
}
