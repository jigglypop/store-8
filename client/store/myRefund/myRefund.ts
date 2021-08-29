import 'regenerator-runtime/runtime';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createExtraGet from '../createExtra/createExtraGet';
import { myRefundApi, myRefundConfirmApi, myRefundDeleteApi } from '@client/api/myRefund';
import {
  IMyRefundRes,
  IMyRefundReq,
  IMyRefundDeleteRes,
  IMyRefundUpdateRes,
} from '@middle/type/myRefund/myRefund';
import createExtraPost from '../createExtra/createExtraPost';

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

const name = 'myRefund';
export const getMyRefund = createAsyncThunk('MY_REFUND_GET_API', myRefundApi);
const myRefundExtra = createExtraGet<IMyRefundRes | null>(getMyRefund, name);
export const deleteMyRefund = createAsyncThunk('MY_REFUND_DELETE_API', myRefundDeleteApi);
const myRefundDeletePostReducer = createExtraPost<IMyRefundReq, IMyRefundRes | null>(
  deleteMyRefund,
  name
);
export const updateMyRefund = createAsyncThunk('MY_REFUND_UPDATE_API', myRefundConfirmApi);
const myRefundUpdatePostReducer = createExtraPost<IMyRefundReq, IMyRefundRes | null>(
  updateMyRefund,
  name
);

const myRefundSlice = createSlice({
  name,
  initialState,
  reducers: {
    initMyRefund: () => initialState,
  },
  extraReducers: {
    ...myRefundExtra,
    ...myRefundDeletePostReducer,
    ...myRefundUpdatePostReducer,
  },
});

export const { initMyRefund } = myRefundSlice.actions;
export default myRefundSlice.reducer;
