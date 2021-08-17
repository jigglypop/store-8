import 'regenerator-runtime/runtime';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CartData } from '@middle/type/cart/cart';

const name = 'cart';

interface ICartState {
  cart: CartData[] | null;
  error: string | null;
  loading: boolean;
}

export interface ICartSetState {
  payload: {
    cartDatas: CartData[];
  };
}

const initialState: ICartState = {
  cart: null,
  error: null,
  loading: false,
};

const cartSlice = createSlice({
  name,
  initialState,
  reducers: {
    initCartStatus: () => initialState,
    setCartData: (state, { payload }: ICartSetState) => {
      state.cart = payload.cartDatas;
    },
  },
});

export const { initCartStatus, setCartData } = cartSlice.actions;
export default cartSlice.reducer;
