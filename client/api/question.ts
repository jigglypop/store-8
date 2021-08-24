import fetchWrapper from '@client/utils/fetchWrapper';
import { IQuestionPostRes } from '@middle/type/question/question';
import request, { IThunkApi } from './utils/request';

interface IQuestionGetReq {
  productId: number;
  query: string;
}

export const getQuestionApi = async (info: IQuestionGetReq, thunkApi: IThunkApi) => {
  if (!info) return;
  const { productId, query } = info;

  const data = await request.get(`/api/question/${productId}?${query}`);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return data;
};

// requestionFrom 타입 지정
export const createQuestionApi = async <T>(productId: number, requestForm: T) => {
  if (!productId || !requestForm) return;

  const data = await fetchWrapper<T, IQuestionPostRes>(
    `/api/question/${productId}`,
    'POST',
    requestForm
  );

  return data;
};

export const updateQuestionApi = async <T>(requestForm: T) => {
  if (!requestForm) return;

  const data = await fetchWrapper<T, IQuestionPostRes>(`/api/question`, 'PUT', requestForm);

  return data;
};

export const deleteQuestionApi = async <T>(requestForm: T) => {
  if (!requestForm) return;

  const data = await fetchWrapper<T, IQuestionPostRes>(`/api/question`, 'DELETE', requestForm);

  return data;
};
