import request, { IThunkApi } from './utils/request';

export const getProductApi = async (productId: number, thunkApi: IThunkApi) => {
  const data = await request.get(`/api/product/${productId}`);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }

  return data.data;
};
