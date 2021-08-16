import 'regenerator-runtime/runtime';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { cartGetApi } from '../../api/cart';
import { ICartGetRes } from '@middle/type/cart/cart';

const name = 'cart';

interface ICartState {
  cart: ICartGetRes | null;
  error: string | null;
  loading: boolean;
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
  },
});

export const getCart = createAsyncThunk(name, cartGetApi);
export const { initCartStatus } = cartSlice.actions;
export default cartSlice.reducer;
