import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@client/store';
import { useEffect, useState } from 'react';
import { getCategory, initCategory } from '@client/store/category/category';

export function useCategory() {
  const { router } = useSelector((state: RootState) => state.router);
  const { category } = useSelector((state: RootState) => state.category);
  const [pages, setPages] = useState<number[]>([]);
  const dispatch = useDispatch();

  // 페이지 시작
  useEffect(() => {
    dispatch(getCategory(`/${router.params}/?${router.query}`));
    return () => {
      dispatch(initCategory());
    };
  }, []);

  // 페이지네이션
  useEffect(() => {
    if (category && category.count) {
      setPages(Array.from({ length: Math.ceil(category.count / 20) }, (_, i) => i + 1));
    }
  }, [category]);
  return { category, pages };
}
