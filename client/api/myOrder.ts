import cache from '@client/utils/cache';
import request, { IThunkApi } from './utils/request';

interface IDateReq {
  startDate: string;
  endDate: string;
}

// 나의 주문 목록 get
export const myOrderApi = async ({ startDate, endDate }: IDateReq, thunkApi: IThunkApi) => {
  const token = cache.get('token');
  const data = await request.getToken(
    `/api/order?startDate=${startDate}&endDate=${endDate}`,
    token
  );
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }

  return data.data;
};

// 나의 상품 주문 목록 get
export const myProductOrderApi = async (productId: number, token: string) => {
  const data = await request.getToken(`/api/order/${productId}`, token);

  if (data.status !== 200) {
    const error = data.message;
    return { status: data.status, error };
  }

  return data;
};
