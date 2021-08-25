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
import { getCart } from './store/product/cart';

const loadUser = async () => {
  try {
    const token = await cache.get('token');
    if (token) {
      await store.dispatch(getCheck(cache.get('token')));
      await store.dispatch(getMyWish(cache.get('token')));
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
