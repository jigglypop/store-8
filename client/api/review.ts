import fetchWrapper from '@client/utils/fetchWrapper';
import request, { IThunkApi } from './utils/request';
import { IReviewLikeReq } from '@middle/type/review/review';

interface IGetReviewReq {
  productId: number;
  query: string;
  token: string;
}

export const getReviewApi = async (
  { productId, query, token }: IGetReviewReq,
  thunkApi: IThunkApi
) => {
  const data = await request.getToken(`/api/review/${productId}?${query}`, token);
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

export const updateReviewApi = async <T>(requestForm: T) => {
  const data = await fetchWrapper<T, IReviewRes>(`/api/review`, 'PUT', requestForm);

  return data;
};

export const deleteReviewApi = async <T>(requestForm: T) => {
  const data = await fetchWrapper<T, IReviewRes>(`/api/review`, 'DELETE', requestForm);

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
