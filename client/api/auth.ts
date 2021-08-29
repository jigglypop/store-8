import { BASE_URL, SERVER_URL } from '../constants/server_url';
import { IRegisterReq } from '@middle/type/auth/register';
import { ILoginReq } from '@middle/type/auth/login';
import request, { IThunkApi } from './utils/request';
import { createToast } from '@client/utils/createToast';
import { IUpdateUserReq } from '@middle/type/auth/check';

// 회원가입
export const registerApi = async (registerform: IRegisterReq, thunkApi: IThunkApi) => {
  const data = await request.post<IRegisterReq>(BASE_URL + '/register', registerform);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  // 토스트(api 끝날 때 토스트 튀어나오게)
  createToast('회원가입');
  return await data.data;
};

// 로그인
export const loginApi = async (loginform: ILoginReq, thunkApi: IThunkApi) => {
  const data = await request.post<ILoginReq>(BASE_URL + '/login', loginform);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  // 토스트(api 끝날 때 토스트 튀어나오게)
  createToast('로그인');
  return await data.data;
};

// 체크
export const checkApi = async (token: string, thunkApi: IThunkApi) => {
  const data = await request.getToken(BASE_URL + '/check', token);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};

// 체크
export const checkUpdateApi = async ({ checkForm, token }: IUpdateUserReq, thunkApi: IThunkApi) => {
  const data = await request.put(BASE_URL + '/check', checkForm, token);
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
  // 토스트(api 끝날 때 토스트 튀어나오게)
  createToast('깃허브 로그인');
  return await data.data;
};
