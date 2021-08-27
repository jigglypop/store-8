import cache from '@client/utils/cache';
import request, { IThunkApi } from './utils/request';

interface IDateReq {
  token: string;
  startDate: string;
  endDate: string;
}

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

export const myRefundRequestApi = async ({
  token,
  orderId,
}: {
  token: string;
  orderId: Number;
}) => {
  const data = await request.post(`/api/refund/create/${orderId}`, {}, token);

  if (data.status !== 200) {
    const error = data.message;
    return false;
  }

  return data.data;
};
