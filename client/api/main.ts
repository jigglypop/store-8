import request, { IThunkApi } from './utils/request';

// 카테고리 가져오기

export const getMainApi = async (query: string, thunkApi: IThunkApi) => {
  const data = await request.get('/api/main');
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};
