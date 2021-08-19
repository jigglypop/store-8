import { getQuestionApi } from '@client/api/question';
import { IQuestionRes } from '@middle/type/question/question';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import createExtraGet from '../createExtra/createExtraGet';

interface IQuestion {
  question: IQuestionRes[] | null;
  error: string | null;
  loading: boolean;
}

const name = 'question';

// const QUESTION_GET = `${name}/get`;
// const QUESTION_CREATE = `${name}/post`;
// const QUESTION_UPDATE = `${name}/put`;
// const QUESTION_DELETE = `${name}/delete`;

export const getQuestion = createAsyncThunk(name, getQuestionApi);
const questionInfoExtra = createExtraGet<IQuestionRes[] | null>(getQuestion, name);

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
  },
  extraReducers: questionInfoExtra,
});

export const { initQuestion } = questionSlice.actions;
export default questionSlice.reducer;
