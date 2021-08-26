import fetchWrapper from '@client/utils/fetchWrapper';
import request, { IThunkApi } from './utils/request';
import { IReviewLikeReq } from '@middle/type/review/review';

interface IGetReviewReq {
  productId: number;
  query: string;
  token: string;
}

export const getReviewApi = async (info: IGetReviewReq, thunkApi: IThunkApi) => {
  if (!info) return;
  const { productId, query, token } = info;

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
export const createReviewApi = async <T>(
  productId: number,
  orderId: number | void,
  requestForm: T
) => {
  if (!productId || !requestForm || !orderId) return;

  const data = await fetchWrapper<T, IReviewRes>(`/api/review/${productId}`, 'POST', {
    ...requestForm,
    orderId,
  });

  return data;
};

export const updateReviewApi = async <T>(requestForm: T) => {
  if (!requestForm) return;

  const data = await fetchWrapper<T, IReviewRes>(`/api/review`, 'PUT', requestForm);

  return data;
};

export const deleteReviewApi = async <T>(requestForm: T) => {
  if (!requestForm) return;

  const data = await fetchWrapper<T, IReviewRes>(`/api/review`, 'DELETE', requestForm);

  return data;
};

export const likeReviewApi = async (reviewId: number, requestForm: IReviewLikeReq) => {
  if (!reviewId || !requestForm) return;

  const data = await fetchWrapper<IReviewLikeReq, IReviewRes>(
    `/api/review/like/${reviewId}`,
    'POST',
    requestForm
  );

  return data;
};
