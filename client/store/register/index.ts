import 'regenerator-runtime/runtime'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { IRegisterData, IRegisterForm, IRegisterInput } from './type';
import { registerApi } from '../../api/auth';
import createExtraReducer from '../create/createExtraReducers';

const name = 'register'
// thunk부분
export const postRegister = createAsyncThunk(name, registerApi)
const authRegisterExtra = createExtraReducer<IRegisterForm, IRegisterData | null>(postRegister, name)

// 회원가입 initialState 상태 타입
export interface IRegisterState {
  registerform: IRegisterForm
  error: string
  [name]: IRegisterData | null
  loading : boolean
}


const initialState : IRegisterState = {
  registerform: {
    username: '',
    email: '',
    password: '',
    passwordconfirm: '',
  },
  [name]: null,
  error: "",
  loading: false,
}

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers:{
    initialize: (state) => {
      state = initialState
    },
    changeRegister: (state, { payload : { key, value } } : IRegisterInput ) =>{
      state.registerform[key] = value
    },
  },
  extraReducers: authRegisterExtra
})

export const { initialize, changeRegister } = registerSlice.actions
export default registerSlice.reducer;
