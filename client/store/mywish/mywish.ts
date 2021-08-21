import 'regenerator-runtime/runtime';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createExtraGet from '../createExtra/createExtraGet';
import { mywishApi } from '@client/api/wish';
import { IMyWishRes } from '@middle/type/wish/mywish';

const name = 'mywish';
export const getMyWish = createAsyncThunk(name, mywishApi);
const mywishExtra = createExtraGet<IMyWishRes | null>(getMyWish, name);

interface ICategoryState {
  mywish: IMyWishRes | null;
  error: string | null;
  loading: boolean;
}

const initialState: ICategoryState = {
  mywish: null,
  error: null,
  loading: false,
};

const mywishSlice = createSlice({
  name,
  initialState,
  reducers: {
    initMyWish: () => initialState,
  },
  extraReducers: mywishExtra,
});

export const { initMyWish } = mywishSlice.actions;
export default mywishSlice.reducer;
