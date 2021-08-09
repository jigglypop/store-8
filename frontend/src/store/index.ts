import register from './register';

import {
  ThunkAction,
  Action,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    register,
  },
  middleware: getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "production"
});

// 타입
export type RootState = ReturnType<typeof store.getState>;
// 루트 리듀서
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;