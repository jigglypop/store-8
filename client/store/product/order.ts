import 'regenerator-runtime/runtime';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CartData } from '@middle/type/cart/cart';

const name = 'order';

interface ICartState {
  cart: CartData[];
  error: string | null;
  loading: boolean;
}

export interface ICartSetState {
  payload: CartData[];
}

const initialState: ICartState = {
  cart: [],
  error: null,
  loading: false,
};

const orderSlice = createSlice({
  name,
  initialState,
  reducers: {
    initOrderStatus: () => initialState,
    setOrderList: (state, { payload }: ICartSetState) => {
      state.cart = payload;
    },
  },
});

export const { initOrderStatus, setOrderList } = orderSlice.actions;
export default orderSlice.reducer;
