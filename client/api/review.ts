import fetchWrapper from '@client/utils/fetchWrapper';
import request, { IThunkApi } from './utils/request';
import { IReviewLikeReq } from '@middle/type/review/review';

interface IGetReviewReq {
  productId: number;
  query: string;
}

export const getReviewApi = async ({ productId, query }: IGetReviewReq, thunkApi: IThunkApi) => {
  const data = await request.get(`/api/review/${productId}?${query}`);
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
export const createReviewApi = async <T>(productId: number, requestForm: T) => {
  const data = await fetchWrapper<T, IReviewRes>(`/api/review/${productId}`, 'POST', requestForm);

  return data;
};

export const updateReviewApi = async <T>(productId: number, requestForm: T) => {
  const data = await fetchWrapper<T, IReviewRes>(`/api/review/${productId}`, 'PUT', requestForm);

  return data;
};

export const deleteReviewApi = async <T>(productId: number, requestForm: T) => {
  const data = await fetchWrapper<T, IReviewRes>(`/api/review/${productId}`, 'DELETE', requestForm);

  return data;
};

export const likeReviewApi = async (reviewId: number, requestForm: IReviewLikeReq) => {
  const data = await fetchWrapper<IReviewLikeReq, IReviewRes>(
    `/api/review/like/${reviewId}`,
    'POST',
    requestForm
  );

  return data;
};
