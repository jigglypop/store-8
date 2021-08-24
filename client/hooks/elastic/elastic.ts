import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@client/store';
import { getElastic } from '@client/store/elastic/elastic';
import { useEffect, useState } from 'react';
import { setSearchTitle } from '@client/store/search/search';

export function useElastic() {
  const { elastic } = useSelector((state: RootState) => state.elastic);
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  // 엘라스틱 서치 검색
  const onElastic = (query: string) => {
    dispatch(getElastic(`/?title=${query} `));
    setTitle(query);
  };

  useEffect(() => {
    if (elastic && elastic.length !== 0) {
      dispatch(setSearchTitle({ title }));
    }
  }, [elastic]);
  return { elastic, onElastic };
}
