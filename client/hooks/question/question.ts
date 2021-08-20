import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@client/store';
import { getQuestion, setError } from '@client/store/product/question';
import {
  IQuestionPostReq,
  IQuestionPutReq,
  IQuestionDeleteReq,
} from '@middle/type/question/question';
import { useRouter } from '../router/router';
import { createQuestionApi, updateQuestionApi, deleteQuestionApi } from '@client/api/question';

type IFetchType = 'create' | 'update' | 'delete';

export function useQuestion() {
  const {
    router: { params },
  } = useRouter();

  const productId = +params;

  const { question, loading, error } = useSelector((state: RootState) => state.question);
  const dispatch = useDispatch();

  const fetchQuestion =
    <T>(type: IFetchType) =>
    async (questionForm: T): Promise<boolean> => {
      let res;

      if (type === 'create') res = await createQuestionApi<T>(productId, questionForm);
      if (type === 'update') res = await updateQuestionApi<T>(productId, questionForm);
      if (type === 'delete') res = await deleteQuestionApi<T>(productId, questionForm);

      if (!res) return false;

      if (!res.success) {
        dispatch(setError(res.errorMessage));
        return false;
      }
      dispatch(getQuestion(productId));
      return true;
    };

  // 페이지 시작
  useEffect(() => {
    dispatch(getQuestion(productId));
  }, []);

  return {
    question,
    loading,
    error,
    createQuestion: fetchQuestion<IQuestionPostReq>('create'),
    updateQuestion: fetchQuestion<IQuestionPutReq>('update'),
    deleteQuestion: fetchQuestion<IQuestionDeleteReq>('delete'),
  };
}
