import { ICartGetReq, ICartDeleteReq, ICartAddReq } from '@middle/type/cart/cart';
import request, { IThunkApi } from './utils/request';

// 장바구니 데이터 가져오기

export const cartGetApi = async (requestForm: ICartGetReq, thunkApi: IThunkApi) => {
  const data = await request.post<ICartGetReq>('/api/cart', requestForm);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};

export const cartAddApi = async (requestForm: ICartAddReq, thunkApi: IThunkApi) => {
  const data = await request.post<ICartAddReq>('/api/cart/add', requestForm);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};

export const cartDeleteApi = async (requestForm: ICartDeleteReq, thunkApi: IThunkApi) => {
  const data = await request.post<ICartDeleteReq>('/api/cart/remove', requestForm);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};
