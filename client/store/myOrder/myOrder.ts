import 'regenerator-runtime/runtime';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createExtraGet from '../createExtra/createExtraGet';
import { myOrderApi } from '@client/api/myOrder';
import { IMyOrderRes } from '@middle/type/myOrder/myOrder';

const name = 'myOrder';
export const getMyOrder = createAsyncThunk(name, myOrderApi);
const myOrderExtra = createExtraGet<IMyOrderRes | null>(getMyOrder, name);

interface IMyOrderState {
  myOrder: IMyOrderRes | null;
  error: string | null;
  loading: boolean;
}

const initialState: IMyOrderState = {
  myOrder: null,
  error: null,
  loading: false,
};

const myOrderSlice = createSlice({
  name,
  initialState,
  reducers: {
    initMyOrder: () => initialState,
  },
  extraReducers: myOrderExtra,
});

export const { initMyOrder } = myOrderSlice.actions;
export default myOrderSlice.reducer;
