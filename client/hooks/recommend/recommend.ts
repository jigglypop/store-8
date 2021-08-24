import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@client/store';
import { useEffect } from 'react';
import { getSearch, initSearch } from '@client/store/search/search';

export function useRecommend() {
  const { recommend } = useSelector((state: RootState) => state.recommend);
  return { recommend };
}
