import 'regenerator-runtime/runtime';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createExtraGet from '../createExtra/createExtraGet';
import { recommendApi } from '@client/api/recommend';
import { IRecommendRes } from '@middle/type/recommend/recommend';

const name = 'recommend';
export const getRecommend = createAsyncThunk(name, recommendApi);
const recommendExtra = createExtraGet<IRecommendRes | null>(getRecommend, name);

interface IRecommendState {
  recommend: IRecommendRes | null;
  error: string | null;
  loading: boolean;
}

const initialState: IRecommendState = {
  recommend: null,
  error: null,
  loading: false,
};

const recommendSlice = createSlice({
  name,
  initialState,
  reducers: {
    initRecommend: () => initialState,
  },
  extraReducers: recommendExtra,
});

export const { initRecommend } = recommendSlice.actions;
export default recommendSlice.reducer;
