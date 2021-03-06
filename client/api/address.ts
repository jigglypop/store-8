import {
  AddressAddReq,
  AddressSetBaseReq,
  AddressUpdateReq,
  AddressRemoveReq,
} from '@middle/type/address/address';
import request, { IThunkApi } from './utils/request';

// 사용자 거주지 데이터 가져오기

export const getAddressApi = async (token: string, thunkApi: IThunkApi) => {
  const data = await request.getToken('/api/address', token);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};

export const addAddressApi = async (requestForm: AddressAddReq, token: string) => {
  const data = await request.post<AddressAddReq>('/api/address/add', requestForm, token);
  if (data.status !== 200) {
    return data.message;
  }
  return data.data;
};

export const updateAddressApi = async (requestForm: AddressUpdateReq, token: string) => {
  const data = await request.post<AddressUpdateReq>('/api/address/update', requestForm, token);
  if (data.status !== 200) {
    return data.message;
  }
  return data.data;
};

export const removeAddressApi = async (requestForm: AddressRemoveReq, token: string) => {
  const data = await request.post<AddressRemoveReq>('/api/address/remove', requestForm, token);
  if (data.status !== 200) {
    return data.message;
  }
  return data.data;
};

export const setBaseAddressApi = async (requestForm: AddressSetBaseReq, token: string) => {
  const data = await request.post<AddressSetBaseReq>('/api/address/setBase', requestForm, token);
  if (data.status !== 200) {
    return data.message;
  }
  return data.data;
};
