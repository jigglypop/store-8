import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@client/store';
import { getQuestion, setError, setPage } from '@client/store/product/question';
import {
  IQuestionPostReq,
  IQuestionPutReq,
  IQuestionDeleteReq,
} from '@middle/type/question/question';
import { useRouter } from '../router/router';
import { createQuestionApi, updateQuestionApi, deleteQuestionApi } from '@client/api/question';
import { getMyQuestion } from '@client/store/my/myQuestion';
import cache from '@client/utils/cache';

type IFetchType = 'create' | 'update' | 'delete';

export function useQuestion() {
  const {
    router: { params },
  } = useRouter();

  const productId = +params;

  const { question, loading, error, currentPage } = useSelector(
    (state: RootState) => state.question
  );
  const { currentPage: myQuestionPage } = useSelector((state: RootState) => state.myQuestion);
  const dispatch = useDispatch();

  const fetchQuestion =
    <T>(type: IFetchType) =>
    async (questionForm: T): Promise<boolean> => {
      let res;

      if (type === 'create') res = await createQuestionApi<T>(productId, questionForm);
      if (type === 'update') res = await updateQuestionApi<T>(questionForm);
      if (type === 'delete') res = await deleteQuestionApi<T>(questionForm);

      if (!res) return false;

      if (!res.success) {
        dispatch(setError(res.errorMessage));
        return false;
      }

      dispatch(getQuestion({ productId, query: `page=${currentPage}` }));
      dispatch(getMyQuestion({ query: `page=${myQuestionPage}`, token: cache.get('token') }));

      return true;
    };

  const setCurrentPage = (newPage: number) => {
    dispatch(setPage(newPage));
    dispatch(getQuestion({ productId, query: `page=${newPage}` }));
  };

  // 페이지 시작
  useEffect(() => {
    dispatch(getQuestion({ productId, query: `page=${currentPage}` }));
  }, []);

  return {
    totalCount: question?.totalCount ?? 0,
    questions: question?.questions ?? [],
    loading,
    error,
    currentPage,
    setCurrentPage,
    createQuestion: fetchQuestion<IQuestionPostReq>('create'),
    updateQuestion: fetchQuestion<IQuestionPutReq>('update'),
    deleteQuestion: fetchQuestion<IQuestionDeleteReq>('delete'),
  };
}
