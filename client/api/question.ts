import fetchWrapper from '@client/utils/fetchWrapper';
import { IQuestionPostRes } from '@middle/type/question/question';
import request, { IThunkApi } from './utils/request';

export const getQuestionApi = async (productId: number, thunkApi: IThunkApi) => {
  const data = await request.get(`/api/question/${productId}`);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return data.data;
};

// requestionFrom 타입 지정
export const createQuestionApi = async <T>(productId: number, requestForm: T) => {
  const data = await fetchWrapper<T, IQuestionPostRes>(
    `/api/question/${productId}`,
    'POST',
    requestForm
  );

  return data;
};

export const updateQuestionApi = async <T>(productId: number, requestForm: T) => {
  const data = await fetchWrapper<T, IQuestionPostRes>(
    `/api/question/${productId}`,
    'PUT',
    requestForm
  );

  return data;
};

export const deleteQuestionApi = async <T>(productId: number, requestForm: T) => {
  const data = await fetchWrapper<T, IQuestionPostRes>(
    `/api/question/${productId}`,
    'DELETE',
    requestForm
  );

  return data;
};