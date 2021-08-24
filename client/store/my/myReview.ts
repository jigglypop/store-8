import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getMyReviewApi } from '@client/api/my';

import { IMyReviewRes } from '@middle/type/review/review';

import createExtraGet from '@store/createExtra/createExtraGet';

interface IMyReview {
  myReview: IMyReviewRes | null;
  error: string | null;
  loading: boolean;
  currentPage: number;
}

const name = 'myReview';

export const getMyReview = createAsyncThunk(name, getMyReviewApi);
const myReviewGetReducer = createExtraGet<IMyReviewRes | null>(getMyReview, name);

const initialState: IMyReview = {
  myReview: null,
  error: null,
  loading: false,
  currentPage: 1,
};

const myReviewSlice = createSlice({
  name,
  initialState,
  reducers: {
    initMyReview: () => initialState,
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: myReviewGetReducer,
});

export const { initMyReview, setPage } = myReviewSlice.actions;
export default myReviewSlice.reducer;
