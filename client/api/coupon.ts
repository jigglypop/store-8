import cache from '@client/utils/cache';
import { CouponUseReq } from '@middle/type/coupon/coupon';
import request, { IThunkApi } from './utils/request';

// 사용자 쿠폰 데이터 가져오기

export const couponGetApi = async (token: string, thunkApi: IThunkApi) => {
  const data = await request.getToken('/api/coupon', token);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};

export const couponGetAllApi = async (token: string) => {
  const data = await request.getToken('/api/coupon/all', token);
  return await data.data;
};

export const couponUseApi = async (requestForm: CouponUseReq, thunkApi: IThunkApi) => {
  const token = cache.get('token');
  const data = await request.post<CouponUseReq>('/api/coupon/useCoupon', requestForm, token);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};
