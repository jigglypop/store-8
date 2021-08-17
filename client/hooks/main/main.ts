import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@client/store';
import { useEffect } from 'react';
import { getMain } from '@client/store/main/main';

export function useMain() {
  const { main } = useSelector((state: RootState) => state.main);

  const dispatch = useDispatch();

  // 페이지 시작
  useEffect(() => {
    dispatch(getMain(''));
  }, []);
  return { main };
}
