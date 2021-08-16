import 'regenerator-runtime/runtime'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { checkApi } from '../../api/auth';
import { ICheckRes } from '@middle/type/auth/check';
import createExtraGet from '../create/createExtraGet';

const name = 'check'
export const getCheck = createAsyncThunk(name, checkApi)
const checkExtra = createExtraGet<ICheckRes | null>(getCheck, name)

interface ICheckState {
  check: ICheckRes | null
  error : string | null
  loading : boolean
}

const initialState : ICheckState = {
  check: null,
  error: null,
  loading: false,
}

const checkSlice = createSlice({
  name,
  initialState,
  reducers: {
    initLogin: () => initialState,
    logout: (state) =>{
      localStorage.clear()
      state.check = null
    },
    setUser: (state, { payload : user }) =>{
      state.check = user
    },
  },
  extraReducers: checkExtra
})
export const { logout, setUser } = checkSlice.actions
export default checkSlice.reducer;