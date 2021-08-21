import fetchWrapper from '@client/utils/fetchWrapper';
import request, { IThunkApi } from './utils/request';

export const getReviewApi = async (productId: number, thunkApi: IThunkApi) => {
  const data = await request.get(`/api/review/${productId}`);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return data;
};

interface IReviewRes {
  success: boolean;
}

// requestionFrom 타입 지정
export const createQuestionApi = async <T>(productId: number, requestForm: T) => {
  const data = await fetchWrapper<T, IReviewRes>(`/api/review/${productId}`, 'POST', requestForm);

  return data;
};

export const updateQuestionApi = async <T>(productId: number, requestForm: T) => {
  const data = await fetchWrapper<T, IReviewRes>(`/api/review/${productId}`, 'PUT', requestForm);

  return data;
};

export const deleteQuestionApi = async <T>(productId: number, requestForm: T) => {
  const data = await fetchWrapper<T, IReviewRes>(`/api/review/${productId}`, 'DELETE', requestForm);

  return data;
};

export const likeReviewApi = async <T>(reviewId: number, requestForm: T) => {
  const data = await fetchWrapper<T, IReviewRes>(
    `/api/review/like/${reviewId}`,
    'DELETE',
    requestForm
  );

  return data;
};
