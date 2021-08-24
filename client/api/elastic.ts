import request, { IThunkApi } from './utils/request';

// 엘라스틱 서치 검색

export const getElasticApi = async (query: string, thunkApi: IThunkApi) => {
  const data = await request.get('/api/elastic' + query);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};
