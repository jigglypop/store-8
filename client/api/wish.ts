import request, { IThunkApi } from './utils/request';

// 찜 목록
export const mywishApi = async (token: string, thunkApi: IThunkApi) => {
  const data = await request.getToken('/api/wish', token);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await data.data;
};

// 찜하기
export const wishApi = async (token: string, productId: string) => {
  const data = await request.getToken(`/api/wish/${productId}`, token);
  if (data.status !== 200) {
    return false;
  } else {
    return true;
  }
};
