import 'regenerator-runtime/runtime'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { registerApi } from '../../api/auth';
import createExtraReducer from '../create/createExtraReducers';
import { IRegisterReq, IRegisterRes } from '@middle/type/auth/register';

const name = 'register'
// 회원가입 input
export interface IRegisterInput {
  payload : {
    key : keyof IRegisterReq
    value : string
  }
}
// 회원가입 initialState 상태 타입
export interface IRegisterState {
  registerform: IRegisterReq
  error: string
  [name]: IRegisterRes | null
  loading : boolean
}
// thunk부분
export const postRegister = createAsyncThunk(name, registerApi)
const registerExtra = createExtraReducer<IRegisterReq, IRegisterRes | null>(postRegister, name)

const initialState : IRegisterState = {
  registerform: {
    username: '',
    email: '',
    password: '',
  },
  [name]: null,
  error: "",
  loading: false,
}

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers:{
    initRegister: () => initialState,
    changeRegister: (state, { payload : { key, value } } : IRegisterInput ) =>{
      state.registerform[key] = value
    },
  },
  extraReducers: registerExtra
})

export const { initRegister, changeRegister } = registerSlice.actions
export default registerSlice.reducer;