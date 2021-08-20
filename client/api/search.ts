import request, { IThunkApi } from './utils/request';

// 카테고리 가져오기

export const getSearchApi = async (query: string, thunkApi: IThunkApi) => {
  const data = await request.get('/api/search' + query);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};
