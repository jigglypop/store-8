import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './GlobalStyle';
import { Provider } from 'react-redux';
import { store } from './store';

import { getCheck } from './store/auth/check';
import cache from './utils/cache';
import ResetStyle from './ResetStyle';
import { HelmetProvider } from 'react-helmet-async';
import { setDarkMode } from './utils/setDisplay';
import { getMyWish } from './store/mywish/mywish';
import { getRecommend } from './store/recommend/recommend';
import { getCart, localAddCart } from './store/product/cart';
import { initStoreModeToken } from './utils/setStoreMode';
import localCart from '@utils/cart';

const loadUser = async () => {
  try {
    const token = await cache.get('token');
    if (token) {
      await store.dispatch(getCheck(cache.get('token')));
      await store.dispatch(getMyWish(cache.get('token')));
      // 만약 로그인을 안한 상태에서 local cart 에 추가된게 있다면 모두 올려주기.
      const localCartData = localCart.get();
      // 서버와 Cart 데이터 동기화
      store.dispatch(localAddCart({ data: localCartData }));
      localCart.init(); // 모두 서버와 동기화 후 초기화하기.
      await store.dispatch(getRecommend(cache.get('token')));
    }
  } catch (e) {
    console.log('로컬 스토리지 오류');
  }
};

loadUser();
setDarkMode();
initStoreModeToken();

const rootEl = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <ResetStyle />
      <GlobalStyle />
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>
  </Provider>,
  rootEl
);
