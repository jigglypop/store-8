import request, { IThunkApi } from './utils/request';

export const getQuestionApi = async (productId: number, thunkApi: IThunkApi) => {
  const data = await request.get(`/api/question/${productId}`);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return data.data;
};

interface IQuestionForm {
  title: string;
  contents: string;
}
// requestionFrom 타입 지정
export const createQuestionApi = async (
  requestForm: IQuestionForm,
  productId: number,
  thunkApi: IThunkApi
) => {
  const data = await request.post<IQuestionForm>(`/api/question/${productId}`, requestForm);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return data.data;
};
export const updateQuestionApi = async (productId: number, thunkApi: IThunkApi) => {};
export const deleteQuestionApi = async (productId: number, thunkApi: IThunkApi) => {};
