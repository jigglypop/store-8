import cache from '@client/utils/cache';
import request, { IThunkApi } from './utils/request';

interface IDateReq {
  startDate: string;
  endDate: string;
}

// 찜 목록
export const myOrderApi = async ({ startDate, endDate }: IDateReq, thunkApi: IThunkApi) => {
  const token = cache.get('token');
  console.log('token: ', token);
  const data = await request.getToken(
    `/api/order?startDate=${startDate}&endDate=${endDate}`,
    token
  );
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }

  console.log(data.data);
  return data.data;
};
