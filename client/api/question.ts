import fetchWrapper from '@client/utils/fetchWrapper';
import { IQuestionPostReq, IQuestionPostRes } from '@middle/type/question/question';
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
export const createQuestionApi = async (productId: number, requestForm: IQuestionPostReq) => {
  const data = await fetchWrapper<IQuestionPostReq, IQuestionPostRes>(
    `/api/question/${productId}`,
    'POST',
    requestForm
  );

  return data;
};

export const updateQuestionApi = async (productId: number, thunkApi: IThunkApi) => {};
export const deleteQuestionApi = async (productId: number, thunkApi: IThunkApi) => {};
