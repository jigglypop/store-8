import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './GlobalStyle';
import App from './App';

const rootEl = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  rootEl
);
