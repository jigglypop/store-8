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
import { getCart, addCart } from '@client/store/product/cart';
import localCart from '@utils/cart';
import { ICartAddReq } from '@middle/type/cart/cart';

const loadUser = async () => {
  try {
    const token = await cache.get('token');
    if (token) {
      await store.dispatch(getCheck(cache.get('token')));
      await store.dispatch(getMyWish(cache.get('token')));

      // TODO : 한번에 모두 올리기
      // 만약 로그인을 안한 상태에서 local cart 에 추가된게 있다면 모두 올려주기.
      const localCartData = localCart.get();
      if (localCartData.length !== 0) {
        localCartData.forEach((cartData: ICartAddReq) => {
          store.dispatch(addCart(cartData));
        });
        localCart.init(); // 모두 서버와 동기화 후 초기화하기.
      }

      store.dispatch(getCart(cache.get('token')));
      store.dispatch(getRecommend(cache.get('token')));
    }
  } catch (e) {
    // TODO : Modal 로 인터넷 오류 혹은 e.message 띄우기
    console.log('로컬 스토리지 오류');
  }
};

loadUser();
setDarkMode();

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
