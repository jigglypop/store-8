import {
  ICartDeleteReq,
  ICartAddReq,
  ICartLocalAddData,
  ICartLocalGetData,
} from '@middle/type/cart/cart';
import cache from '@utils/cache';
import request, { IThunkApi } from './utils/request';

// 장바구니 데이터 가져오기

export const cartGetApi = async (token: string, thunkApi: IThunkApi) => {
  const data = await request.getToken('/api/cart', token);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};

export const cartAddApi = async (requestForm: ICartAddReq, thunkApi: IThunkApi) => {
  const token = cache.get('token');
  const data = await request.post<ICartAddReq>('/api/cart/add', requestForm, token);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};

export const cartDeleteApi = async (requestForm: ICartDeleteReq, thunkApi: IThunkApi) => {
  const token = cache.get('token');
  const data = await request.post<ICartDeleteReq>('/api/cart/remove', requestForm, token);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};

export const cartLocalGetApi = async (requestForm: ICartLocalGetData, thunkApi: IThunkApi) => {
  const data = await request.post<ICartLocalGetData>('/api/cart/getLocal', requestForm);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};

export const cartLocalAddApi = async (requestForm: ICartLocalAddData, thunkApi: IThunkApi) => {
  const token = cache.get('token');
  const data = await request.post<ICartLocalAddData>('/api/cart/addLcoal', requestForm, token);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};
