import { AddressGetReq, AddressAddReq, AddressSetBaseReq } from '@middle/type/address/address';
import request, { IThunkApi } from './utils/request';

// 사용자 거주지 데이터 가져오기

export const getAddressApi = async (requestForm: AddressGetReq, thunkApi: IThunkApi) => {
  const data = await request.post<AddressGetReq>('/api/address', requestForm);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};

export const addAddressApi = async (requestForm: AddressAddReq) => {
  const data = await request.post<AddressAddReq>('/api/address/add', requestForm);
  if (data.status !== 200) {
    return data.message;
  }
  return data.data;
};

export const setBaseAddressApi = async (requestForm: AddressSetBaseReq) => {
  const data = await request.post<AddressSetBaseReq>('/api/address/setBase', requestForm);
  if (data.status !== 200) {
    return data.message;
  }
  return data.data;
};
