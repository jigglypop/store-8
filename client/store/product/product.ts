import { createAsyncThunk, AsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductApi } from '@api/product';
import { IProductRes } from '../../../middle/type/product/product';
import createExtraGet from '../createExtra/createExtraGet';

interface IProduct {
  product: IProductRes | null;
  error: string | null;
  loading: boolean;
}

const name = 'product';

export const getProduct = createAsyncThunk(name, getProductApi);
const productInfoExtra = createExtraGet<IProductRes | null>(getProduct, name);

const initialState: IProduct = {
  product: null,
  error: null,
  loading: false,
};

const productSlice = createSlice({
  name,
  initialState,
  reducers: {
    initProduct: () => initialState,
  },
  extraReducers: productInfoExtra,
});

export const { initProduct } = productSlice.actions;
export default productSlice.reducer;
