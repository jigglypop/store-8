import 'regenerator-runtime/runtime';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createExtraPost from '@store/createExtra/createExtraPost';
import { couponGetApi, couponUseApi } from '@api/coupon';
import { CouponData, CouponGetReq, CouponRes, CouponUseReq } from '@middle/type/Coupon/coupon';

const name = 'coupon';

interface ICouponState {
  coupon: CouponData[];
  error: string | null;
  loading: boolean;
}

const initialState: ICouponState = {
  coupon: [],
  error: null,
  loading: false,
};

export const getCoupon = createAsyncThunk('COUPON_GET_API', couponGetApi);
const couponGetReducer = createExtraPost<CouponGetReq, CouponData[] | null>(getCoupon, name);
export const useCoupon = createAsyncThunk('COUPON_USE_API', couponUseApi);
const couponUsePostReducer = createExtraPost<CouponUseReq, CouponData[] | null>(useCoupon, name);

const couponSlice = createSlice({
  name,
  initialState,
  reducers: {
    initCouponStatus: () => initialState,
  },
  extraReducers: { ...couponGetReducer, ...couponUsePostReducer },
});

export const { initCouponStatus } = couponSlice.actions;
export default couponSlice.reducer;
