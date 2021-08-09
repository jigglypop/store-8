import { AsyncThunk } from "@reduxjs/toolkit";

interface IState<TData, TForm> {
    [props: string]: TData | TForm | string | boolean;
}

interface IAction<TData> {
    payload: TData;
    error: string;
}

const createExtraReducer = <TForm, TData>(func: AsyncThunk<string, TForm, {}>, name: string) =>{
    return {
        [func.pending.type]: (state: IState<TData, TForm>) => {
            state.loading = false;
        },
        [func.fulfilled.type]: (state: IState<TData, TForm>, action: IAction<TData>) => {
            state.loading = true;
            state[name] = action.payload;
        },
        [func.rejected.type]: (state: IState<TData, TForm>, action: IAction<TData>) => {
            state.loading = false;
            state.error = action.error
        }
    }
}
export default createExtraReducer