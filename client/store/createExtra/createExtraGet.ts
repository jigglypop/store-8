import { AsyncThunk } from '@reduxjs/toolkit';

interface IState<TData> {
  [props: string]: TData | string | boolean | number;
}

interface IAction<TData> {
  payload: TData;
  error: string;
}

const createExtraGet = <TData>(func: AsyncThunk<string, any, {}>, name: string) => {
  return {
    [func.pending.type]: (state: IState<TData>) => {
      state.loading = true;
    },
    [func.fulfilled.type]: (state: IState<TData>, action: IAction<TData>) => {
      state.loading = false;
      state[name] = action.payload;
      state.error = '';
    },
    [func.rejected.type]: (state: IState<TData>, action: IAction<TData>) => {
      state.loading = false;
      state.error = action.payload;
    },
  };
};
export default createExtraGet;
