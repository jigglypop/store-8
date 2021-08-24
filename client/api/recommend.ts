import request, { IThunkApi } from './utils/request';

// 찜 목록
export const recommendApi = async (token: string, thunkApi: IThunkApi) => {
  const data = await request.getToken('/api/recommend', token);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};
