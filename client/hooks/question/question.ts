import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@client/store';
import { getQuestion } from '@client/store/product/question';

export function useQuestion(productId: number) {
  const { question, loading, error } = useSelector((state: RootState) => state.question);
  const dispatch = useDispatch();

  // 페이지 시작
  useEffect(() => {
    dispatch(getQuestion(productId));
  }, []);

  return { question, loading, error };
}
