import 'regenerator-runtime/runtime';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// TODO : api/cart 에 cartAddApi, cartDeleteApi 를 추가하자.
import { cartGetApi } from '../../api/cart';
import { ICartGetRes, CartData } from '@middle/type/cart/cart';

const name = 'cart';

interface ICartState {
  cart: ICartGetRes | null;
  error: string | null;
  loading: boolean;
}
export interface ICartGetState {
  payload: {
    key: 'userId';
    value: CartData[];
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
    setCartStatus: (cartState, { payload: { value } }: ICartGetState) => {
      console.log(cartState);
      console.log(value);
    },
  },
});

export const getCart = createAsyncThunk(name, cartGetApi);
export const { initCartStatus, setCartStatus } = cartSlice.actions;
export default cartSlice.reducer;
