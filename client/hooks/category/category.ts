import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@client/store';
import { useEffect } from 'react';
import { getCategory } from '@client/store/category/category';

export function useCategory() {
  const { router } = useSelector((state: RootState) => state.router);
  const { category } = useSelector((state: RootState) => state.category);

  const dispatch = useDispatch();

  // 페이지 시작
  useEffect(() => {
    dispatch(getCategory(`/${router.params}/?${router.query}`));
  }, []);
  return { category };
}
