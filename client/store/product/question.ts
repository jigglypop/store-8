import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { getQuestionApi } from '@client/api/question';

import { IQuestionRes } from '@middle/type/question/question';

import createExtraGet from '@store/createExtra/createExtraGet';

interface IQuestion {
  question: IQuestionRes[] | null;
  error: string | null;
  loading: boolean;
}

const name = 'question';

export const getQuestion = createAsyncThunk(name, getQuestionApi);
const questionGetReducer = createExtraGet<IQuestionRes[] | null>(getQuestion, name);

const initialState: IQuestion = {
  question: null,
  error: null,
  loading: false,
};

const questionSlice = createSlice({
  name,
  initialState,
  reducers: {
    initQuestion: () => initialState,
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: questionGetReducer,
});

export const { initQuestion, setError } = questionSlice.actions;
export default questionSlice.reducer;
