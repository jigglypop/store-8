import register from './auth/register';
import login from './auth/login';
import check from './auth/check';
import github from './auth/github';
import router from './router/router';
import category from './category/category';
import mode from './mode/mode';
import main from './main/main';

import { ThunkAction, Action, configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    register,
    login,
    check,
    github,
    router,
    category,
    mode,
    main,
  },
  devTools: process.env.NODE_ENV !== 'production',
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
