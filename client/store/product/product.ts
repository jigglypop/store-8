import { createAsyncThunk, AsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getProductApi } from '@api/product';
import { IProductRes } from '../../../middle/type/product/product';
import createExtraGet from '../createExtra/createExtraGet';

interface IOptionCount {
  optionId: number;
  count: number;
}

interface IOptionCountState {
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
    setOptionCountState: (state, action: PayloadAction<IOptionCount>) => {
      const { optionId, count } = action.payload;
      state.optionCount = { ...state.optionCount, [optionId]: count };
    },
    deleteOptionCountState: (state, action: PayloadAction<number>) => {
      const newOptionCount = { ...state.optionCount };
      delete newOptionCount[action.payload];
      state.optionCount = newOptionCount;
    },
  },
  extraReducers: productInfoExtra,
});

export const { initProduct, setCountState, setOptionCountState, deleteOptionCountState } =
  productSlice.actions;
export default productSlice.reducer;
