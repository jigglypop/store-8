import cache from '@client/utils/cache';
import { IOrder } from '@middle/type/myOrder/myOrder';
import request, { IThunkApi } from './utils/request';

interface IDateReq {
  token: string;
  startDate: string;
  endDate: string;
}

interface IMyProductOrderApiRes {
  status: number;
  error?: string;
  data?: IOrder[];
}

export const myOrderApi = async ({ token, startDate, endDate }: IDateReq, thunkApi: IThunkApi) => {
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
export const myProductOrderApi = async (
  productId: number,
  token: string
): Promise<IMyProductOrderApiRes> => {
  const data = await request.getToken(`/api/order/${productId}`, token);

  if (data.status !== 200) {
    const error = data.message;
    return { status: data.status, error };
  }

  return data;
};

export const myOrderConfirmApi = async ({ orderId, token }: { orderId: Number; token: string }) => {
  const data = await request.post(`/api/order/confirm/${orderId}`, {}, token);

  if (data.status !== 200) {
    const error = data.message;
    return false;
  }

  return data.data;
};
