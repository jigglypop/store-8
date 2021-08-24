import 'regenerator-runtime/runtime';
import { createSlice } from '@reduxjs/toolkit';
import { ProceedOrderProps } from '@middle/type/product/order';

const name = 'finish';

interface IFinishState {
  order: ProceedOrderProps;
  error: string | null;
  loading: boolean;
}

export interface IFinishSetState {
  payload: ProceedOrderProps;
}

const initialState: IFinishState = {
  order: {
    useCouponId: 0,
    useCouponAmount: 0,
    useMileageAmount: 0,
    addMileageAmount: 0,
    addressInfo: {
      addressId: 0,
      address: '',
      extraAddress: '',
      zonecode: '',
      name: '',
      email: '',
      call: '',
    },
    isBase: false,
  },
  error: null,
  loading: false,
};

const finishSlice = createSlice({
  name,
  initialState,
  reducers: {
    initFinishStatus: () => initialState,
    setFinishState: (state, { payload }: IFinishSetState) => {
      state.order = payload;
    },
  },
});

export const { initFinishStatus, setFinishState } = finishSlice.actions;
export default finishSlice.reducer;
