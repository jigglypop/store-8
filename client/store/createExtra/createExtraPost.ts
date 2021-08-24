import { AsyncThunk } from '@reduxjs/toolkit';

interface IState<TData, TForm> {
  [props: string]: TData | TForm | string | boolean;
}

interface IAction<TData> {
  payload: TData;
  error: string;
}

const createExtraPost = <TForm, TData>(func: AsyncThunk<string, TForm, {}>, name: string) => {
  return {
    [func.pending.type]: (state: IState<TData, TForm>) => {
      state.loading = true;
    },
    [func.fulfilled.type]: (state: IState<TData, TForm>, action: IAction<TData>) => {
      state.loading = false;
      state[name] = action.payload;
      state.error = '';
    },
    [func.rejected.type]: (state: IState<TData, TForm>, action: IAction<TData>) => {
      state.loading = false;
      state.error = action.payload;
    },
  };
};
export default createExtraPost;
