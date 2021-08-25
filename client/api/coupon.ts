import { CouponGetReq, CouponUseReq } from '@middle/type/Coupon/coupon';
import request, { IThunkApi } from './utils/request';

// 사용자 쿠폰 데이터 가져오기

export const couponGetApi = async (requestForm: CouponGetReq, thunkApi: IThunkApi) => {
  const data = await request.post<CouponGetReq>('/api/coupon', requestForm);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};

export const couponGetAllApi = async (requestForm: CouponGetReq) => {
  const data = await request.post<CouponGetReq>('/api/coupon/all', requestForm);
  return await data.data;
};

export const couponUseApi = async (requestForm: CouponUseReq, thunkApi: IThunkApi) => {
  const data = await request.post<CouponUseReq>('/api/coupon/useCoupon', requestForm);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};
