import { createAsyncThunk, AsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProductApi } from '@api/product';
import { IProductRes } from '../../../middle/type/product/product';
import createExtraGet from '../createExtra/createExtraGet';

interface IOptionCount {
  [key: string]: number;
}

//TODO: optionCount 타입설정 시 에러발생 why?
interface IProduct {
  product: IProductRes | null;
  error: string | null;
  loading: boolean;
  count: number;
  optionCount: any;
}
const name = 'product';

export const getProduct = createAsyncThunk(name, getProductApi);
const productInfoExtra = createExtraGet<IProductRes | null>(getProduct, name);

const initialState: IProduct = {
  product: null,
  error: null,
  loading: false,
  count: 1,
  optionCount: null,
};

const productSlice = createSlice({
  name,
  initialState,
  reducers: {
    initProduct: () => initialState,
    setCountState: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setOptionCountState: (state, action) => {
      state.count = action.payload;
    },
  },
  extraReducers: productInfoExtra,
});

export const { initProduct, setCountState, setOptionCountState } = productSlice.actions;
export default productSlice.reducer;
