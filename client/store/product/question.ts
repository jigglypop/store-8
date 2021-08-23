import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getQuestionApi } from '@client/api/question';

import { IQuestionRes } from '@middle/type/question/question';

import createExtraGet from '@store/createExtra/createExtraGet';

interface IQuestion {
  question: IQuestionRes | null;
  error: string | null;
  loading: boolean;
  currentPage: number;
}

const name = 'question';

export const getQuestion = createAsyncThunk(name, getQuestionApi);
const questionGetReducer = createExtraGet<IQuestionRes | null>(getQuestion, name);

const initialState: IQuestion = {
  question: null,
  error: null,
  loading: false,
  currentPage: 1,
};

const questionSlice = createSlice({
  name,
  initialState,
  reducers: {
    initQuestion: () => initialState,
    setError: (state, action) => {
      state.error = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: questionGetReducer,
});

export const { initQuestion, setError, setPage } = questionSlice.actions;
export default questionSlice.reducer;
