import './ResetStyle.tsx';
import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './GlobalStyle';
import App from './App';
import GlobalStyle from './GlobalStyle';
import ResetStyle from './ResetStyle';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <ResetStyle />
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  rootEl
);
