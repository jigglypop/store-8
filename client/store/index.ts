import register from './auth/register';
import login from './auth/login';
import check from './auth/check';
import github from './auth/github';
import cart from './product/cart';
import coupon from './coupon/coupon';
import address from './address/address';
import router from './router/router';
import category from './category/category';
import mode from './mode/mode';
import main from './main/main';
import order from './product/order';
import product from './product/product';
import question from './product/question';
import search from './search/search';
import mywish from './mywish/mywish';
import review from './product/review';

import { ThunkAction, Action, configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    register,
    login,
    check,
    github,
    cart,
    coupon,
    address,
    router,
    category,
    mode,
    main,
    order,
    product,
    question,
    search,
    mywish,
    review,
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
