import 'regenerator-runtime/runtime';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createExtraPost from '@store/createExtra/createExtraPost';
import { cartGetApi, cartDeleteApi, cartAddApi } from '@api/cart';
import {
  CartData,
  ICartGetRes,
  ICartGetReq,
  ICartDeleteRes,
  ICartDeleteReq,
  ICartAddReq,
  ICartAddRes,
} from '@middle/type/cart/cart';

const name = 'cart';

interface ICartState {
  cart: CartData[] | null;
  error: string | null;
  loading: boolean;
}

export interface ICartSetState {
  payload: CartData[];
}

const initialState: ICartState = {
  cart: null,
  error: null,
  loading: false,
};

export const getCart = createAsyncThunk('CART_GET_API', cartGetApi);
const cartGetPostReducer = createExtraPost<ICartGetReq, ICartGetRes | null>(getCart, name);
export const delCart = createAsyncThunk('CART_DEL_API', cartDeleteApi);
const cartDelPostReducer = createExtraPost<ICartDeleteReq, ICartDeleteRes | null>(delCart, name);
export const addCart = createAsyncThunk('CART_ADD_API', cartAddApi);
const cartAddPostReducer = createExtraPost<ICartAddReq, ICartAddRes | null>(addCart, name);

const cartSlice = createSlice({
  name,
  initialState,
  reducers: {
    initCartStatus: () => initialState,
  },
  extraReducers: { ...cartGetPostReducer, ...cartDelPostReducer, ...cartAddPostReducer },
});

export const { initCartStatus } = cartSlice.actions;
export default cartSlice.reducer;
