import request, { IThunkApi } from './utils/request';

interface IQuestionGetReq {
  query: string;
  token: string;
}

export const getMyQuestionApi = async (info: IQuestionGetReq, thunkApi: IThunkApi) => {
  if (!info) return;
  const { query, token } = info;

  const data = await request.getToken(`/api/my/question?${query}`, token);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return data;
};

export const getMyReviewApi = async (info: IQuestionGetReq, thunkApi: IThunkApi) => {
  if (!info) return;
  const { query, token } = info;

  const data = await request.getToken(`/api/my/review?${query}`, token);
  if (data.status !== 200) {
    const error = data.message;
    return await thunkApi.rejectWithValue(error);
  }
  return data;
};
