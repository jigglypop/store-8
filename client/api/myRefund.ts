import cache from '@client/utils/cache';
import { IMyRefundReq, IDateReq, IMyRefundCreateReq } from '@middle/type/myRefund/myRefund';
import request, { IThunkApi } from './utils/request';

// 찜 목록
export const myRefundApi = async ({ token, startDate, endDate }: IDateReq, thunkApi: IThunkApi) => {
  const data = await request.getToken(
    `/api/refund?startDate=${startDate}&endDate=${endDate}`,
    token
  );
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }

  return data.data;
};

export const myRefundCreateApi = async (
  { token, orderId }: IMyRefundCreateReq,
  thunkApi?: IThunkApi
) => {
  const data = await request.post(`/api/refund/create/${orderId}`, {}, token);

  if (data.status !== 200) {
    const error = data.message;
    return thunkApi ? thunkApi.rejectWithValue(error) : false;
  }

  return data.data;
};

export const myRefundConfirmApi = async (
  { token, refundId, startDate, endDate }: IMyRefundReq,
  thunkApi: IThunkApi
) => {
  const data = await request.put(`/api/refund/confirm/${refundId}`, { isConfirmed: true }, token);

  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }

  const res = await request.getToken(
    `/api/refund?startDate=${startDate}&endDate=${endDate}`,
    token
  );

  if (res.status !== 200) {
    const error = res.message;
    return await thunkApi.rejectWithValue(error);
  }

  return res.data;
};

export const myRefundDeleteApi = async (
  { token, refundId, startDate, endDate }: IMyRefundReq,
  thunkApi: IThunkApi
) => {
  const data = await request.delete(`/api/refund/cancel/${refundId}`, token);

  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }

  const res = await request.getToken(
    `/api/refund?startDate=${startDate}&endDate=${endDate}`,
    token
  );

  if (res.status !== 200) {
    const error = res.message;
    return await thunkApi.rejectWithValue(error);
  }

  return res.data;
};
