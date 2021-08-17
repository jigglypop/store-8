import 'regenerator-runtime/runtime';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// TODO : api/cart 에 cartAddApi, cartDeleteApi 를 추가하자.
import { cartGetApi } from '../../api/cart';
import { ICartGetRes, ICartGetReq, CartData } from '@middle/type/cart/cart';
import createExtraPost from '@store/createExtra/createExtraPost';

const name = 'cart';

interface ICartState {
  cart: ICartGetRes | null;
  error: string | null;
  loading: boolean;
}
export const getCart = createAsyncThunk(name, cartGetApi);
const cartExtra = createExtraPost<ICartGetReq, ICartGetRes | null>(getCart, name);

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
  extraReducers: cartExtra,
});

export const { initCartStatus, setCartStatus } = cartSlice.actions;
export default cartSlice.reducer;
