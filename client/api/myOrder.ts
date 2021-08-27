import cache from '@client/utils/cache';
import request, { IThunkApi } from './utils/request';

interface IDateReq {
  token: string;
  startDate: string;
  endDate: string;
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

export const myOrderConfirmApi = async ({ orderId, token }: { orderId: Number; token: string }) => {
  const data = await request.post(`/api/order/confirm/${orderId}`, {}, token);

  if (data.status !== 200) {
    const error = data.message;
    return false;
  }

  return data.data;
};
