import 'regenerator-runtime/runtime';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { checkApi, checkUpdateApi } from '../../api/auth';
import { ICheckRes, IUpdateUserReq } from '@middle/type/auth/check';
import createExtraGet from '../createExtra/createExtraGet';
import createExtraPost from '../createExtra/createExtraPost';

const name = 'check';
export const getCheck = createAsyncThunk('CHECK_GET_API', checkApi);
const checkExtra = createExtraGet<ICheckRes | null>(getCheck, name);
export const updateCheck = createAsyncThunk('CHECK_UPDATE_API', checkUpdateApi);
const checkPostReducer = createExtraPost<IUpdateUserReq, ICheckRes | null>(updateCheck, name);

interface ICheckState {
  check: ICheckRes | null;
  error: string | null;
  loading: boolean;
}

const initialState: ICheckState = {
  check: null,
  error: null,
  loading: false,
};

const checkSlice = createSlice({
  name,
  initialState,
  reducers: {
    initLogin: () => initialState,
    logout: (state) => {
      localStorage.clear();
      state.check = null;
    },
    setUser: (state, { payload: user }) => {
      state.check = user;
    },
  },
  extraReducers: checkExtra,
});
export const { logout, setUser } = checkSlice.actions;
export default checkSlice.reducer;
