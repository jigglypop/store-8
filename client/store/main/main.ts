import 'regenerator-runtime/runtime';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import createExtraGet from '../createExtra/createExtraGet';
import { getMainApi } from '@client/api/main';
import { IMainRes } from '@middle/type/main/main';

const name = 'main';
export const getMain = createAsyncThunk(name, getMainApi);
const mainExtra = createExtraGet<IMainRes | null>(getMain, name);

interface IMainState {
  main: IMainRes | null;
  error: string | null;
  loading: boolean;
}

const initialState: IMainState = {
  main: null,
  error: null,
  loading: false,
};

const mainSlice = createSlice({
  name,
  initialState,
  reducers: {
    initMain: () => initialState,
  },
  extraReducers: mainExtra,
});

export const { initMain } = mainSlice.actions;
export default mainSlice.reducer;
