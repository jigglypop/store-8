import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as S from './GlobalStyle';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <S.GlobalStyle />
    <App />
  </React.StrictMode>,
  rootEl
);
