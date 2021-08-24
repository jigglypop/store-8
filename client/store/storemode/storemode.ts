import { createSlice } from '@reduxjs/toolkit';

const name = 'storemode';
export interface IModeInputAll {
  payload: {
    storemode: boolean;
  };
}

export interface IModeState {
  storemode: boolean;
}

const initialState: IModeState = {
  storemode: true,
};

const storemodeSlice = createSlice({
  name,
  initialState,
  reducers: {
    initStoreMode: () => initialState,
    toggleStoreMode: (state) => {
      state.storemode = !state.storemode;
    },
    setStoreMode: (state) => {
      state.storemode = false;
    },
    setNotStoreMode: (state) => {
      state.storemode = true;
    },
  },
});
export const { initStoreMode, toggleStoreMode, setStoreMode, setNotStoreMode } =
  storemodeSlice.actions;
export default storemodeSlice.reducer;
