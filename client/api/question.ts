import request, { IThunkApi } from './utils/request';

export const getQuestionApi = async (productId: number, thunkApi: IThunkApi) => {
  const data = await request.get(`/api/question/${productId}`);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return data.data;
};

export const createQuestionApi = async (productId: number, thunkApi: IThunkApi) => {
  //   const data = await request.post(`/api/question/${productId}`);
  //   if (data.status !== 200) {
  //     const error = data.message;
  //     return await thunkApi.rejectWithValue(error);
  //   }
  //   return data.data;
};
export const updateQuestionApi = async (productId: number, thunkApi: IThunkApi) => {};
export const deleteQuestionApi = async (productId: number, thunkApi: IThunkApi) => {};
