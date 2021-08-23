import 'regenerator-runtime/runtime';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createExtraGet from '../createExtra/createExtraGet';
import { myRefundApi } from '@client/api/myRefund';
import { IMyRefundRes } from '@middle/type/myRefund/myRefund';

const name = 'myRefund';
export const getMyRefund = createAsyncThunk(name, myRefundApi);
const myRefundExtra = createExtraGet<IMyRefundRes | null>(getMyRefund, name);

interface IMyRefundState {
  myRefund: IMyRefundRes | null;
  error: string | null;
  loading: boolean;
}

const initialState: IMyRefundState = {
  myRefund: null,
  error: null,
  loading: false,
};

const myRefundSlice = createSlice({
  name,
  initialState,
  reducers: {
    initMyRefund: () => initialState,
  },
  extraReducers: myRefundExtra,
});

export const { initMyRefund } = myRefundSlice.actions;
export default myRefundSlice.reducer;
