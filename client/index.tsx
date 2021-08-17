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

const loadUser = () => {
  try {
    const token = cache.get('token');
    if (!token) return;
    store.dispatch(getCheck(token));
  } catch (e) {
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
