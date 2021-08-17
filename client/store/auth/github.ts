import 'regenerator-runtime/runtime'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { githubApi } from '../../api/auth';
import { ICheckRes } from '@middle/type/auth/check';
import createExtraGet from '../createExtra/createExtraGet';

const name = 'github'
export const getGithub = createAsyncThunk(name, githubApi)
const githubExtra = createExtraGet<ICheckRes | null>(getGithub, name)

interface ICheckState {
  github: ICheckRes | null
  error : string | null
  loading : boolean
}

const initialState : ICheckState = {
  github: null,
  error: null,
  loading: false,
}

const githubSlice = createSlice({
  name,
  initialState,
  reducers: {
    initGithub: () => initialState,
  },
  extraReducers: githubExtra
})
export const { initGithub } = githubSlice.actions
export default githubSlice.reducer;