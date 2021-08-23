import { getReviewApi } from '@client/api/review';
import { IReviewRes } from '@middle/type/review/review';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import createExtraGet from '../createExtra/createExtraGet';

interface IReview {
  review: IReviewRes | null;
  error: null;
  loading: boolean;
  currentPage: number;
}

const name = 'review';

export const getReview = createAsyncThunk(name, getReviewApi);
const reviewGetReducer = createExtraGet<IReviewRes | null>(getReview, name);

const initialState: IReview = {
  review: null,
  error: null,
  loading: false,
  currentPage: 1,
};

const reviewSlice = createSlice({
  name,
  initialState,
  reducers: {
    initReview: () => initialState,
    setError: (state, action) => {
      state.error = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: reviewGetReducer,
});

export const { initReview, setError, setPage } = reviewSlice.actions;
export default reviewSlice.reducer;
