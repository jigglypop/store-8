import 'regenerator-runtime/runtime'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { loginApi } from '../../api/auth';
import { ILoginReq, ILoginRes } from '@middle/type/auth/login';
import createExtraPost from '../createExtra/createExtraPost';

const name = 'login'
// 회원가입 input
export interface ILoginInput {
  payload : {
    key : keyof ILoginReq
    value : string
  }
}
// 회원가입 initialState 상태 타입
export interface ILoginState {
  loginform: ILoginReq
  error: string
  [name]: ILoginRes | null
  loading : boolean
}
// thunk부분
export const postLogin = createAsyncThunk(name, loginApi)
const loginExtra = createExtraPost<ILoginReq, ILoginRes | null>(postLogin, name)

const initialState : ILoginState = {
  loginform: {
    username: '',
    password: '',
  },
  [name]: null,
  error: "",
  loading: false,
}

const loginSlice = createSlice({
  name,
  initialState,
  reducers:{
    initLogin: () => initialState,
    changeLogin: (state, { payload : { key, value } } : ILoginInput ) =>{
      state.loginform[key] = value
    },
  },
  extraReducers: loginExtra
})

export const { initLogin, changeLogin } = loginSlice.actions
export default loginSlice.reducer;
