import { BASE_URL, SERVER_URL } from '../constants/server_url';
import { IRegisterReq } from '@middle/type/auth/register';
import { ILoginReq } from '@middle/type/auth/login';
import request, { IThunkApi } from './utils/request';

// 회원가입
export const registerApi = async (registerform: IRegisterReq, thunkApi: IThunkApi) => {
  const data = await request.post<IRegisterReq>(BASE_URL + '/register', registerform);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};

// 로그인
export const loginApi = async (loginform: ILoginReq, thunkApi: IThunkApi) => {
  const data = await request.post<ILoginReq>(BASE_URL + '/login', loginform);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};

// 체크
export const checkApi = async (token: string, thunkApi: IThunkApi) => {
  const data = await request.get(BASE_URL + '/check', token);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};

// 깃허브

export const githubApi = async (token: string, thunkApi: IThunkApi) => {
  const data = await request.github(SERVER_URL + '/callback/github', token);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};
