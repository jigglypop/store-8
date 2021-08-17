import 'regenerator-runtime/runtime';
import { createSlice } from '@reduxjs/toolkit';

const name = 'mode';
// 모드 val 값 인덱스 시그니쳐
export interface IModeReq {
  [key: string]: string;
}

export interface IValInput {
  payload: {
    key: keyof IModeReq;
    value: string;
  };
}

export interface IModeInputAll {
  payload: {
    mode: boolean;
    vals: IModeReq;
  };
}

export interface IModeState {
  vals: IModeReq;
  mode: boolean;
}

// false -> 밤, true -> 낮
const initialState: IModeState = {
  vals: {},
  mode: false,
};

const modeSlice = createSlice({
  name,
  initialState,
  reducers: {
    initMode: () => initialState,
    changeModeAll: (state, { payload }: IModeInputAll) => {
      state.mode = payload.mode;
      state.vals = payload.vals;
    },
  },
});
export const { initMode, changeModeAll } = modeSlice.actions;
export default modeSlice.reducer;
