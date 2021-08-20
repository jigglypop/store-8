import { createQuestionApi } from '@client/api/question';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@client/store';
import { getQuestion, setError } from '@client/store/product/question';
import { IQuestionPostReq } from '@middle/type/question/question';
import { useRouter } from '../router/router';

export function useQuestion() {
  const {
    router: { params },
  } = useRouter();

  const productId = +params;

  const { question, loading, error } = useSelector((state: RootState) => state.question);
  const dispatch = useDispatch();

  const createQuestion = async (questionForm: IQuestionPostReq) => {
    const res = await createQuestionApi(productId, questionForm);
    if (res.error) {
      dispatch(setError);
      return;
    }
    dispatch(getQuestion(productId));
  };

  // 페이지 시작
  useEffect(() => {
    dispatch(getQuestion(productId));
  }, []);

  return { question, loading, error, createQuestion };
}
