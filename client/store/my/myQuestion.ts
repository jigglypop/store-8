import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getMyQuestionApi } from '@client/api/my';

import { IMyQuestionRes } from '@middle/type/question/question';

import createExtraGet from '@store/createExtra/createExtraGet';

interface IMyQuestion {
  myQuestion: IMyQuestionRes | null;
  error: string | null;
  loading: boolean;
  currentPage: number;
}

const name = 'myQuestion';

export const getMyQuestion = createAsyncThunk(name, getMyQuestionApi);
const myQuestionGetReducer = createExtraGet<IMyQuestionRes | null>(getMyQuestion, name);

const initialState: IMyQuestion = {
  myQuestion: null,
  error: null,
  loading: false,
  currentPage: 1,
};

const myQuestionSlice = createSlice({
  name,
  initialState,
  reducers: {
    initMyQuestion: () => initialState,
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: myQuestionGetReducer,
});

export const { initMyQuestion, setPage } = myQuestionSlice.actions;
export default myQuestionSlice.reducer;
