import { ICartGetReq } from '@middle/type/cart/cart';
import request, { IThunkApi } from './utils/request';

// 장바구니 데이터 가져오기
export const cartGetApi = async (requestForm: ICartGetReq, thunkApi: IThunkApi) => {
  const data = await request.post<ICartGetReq>('/api/cart', requestForm);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return await JSON.parse(data.data);
};