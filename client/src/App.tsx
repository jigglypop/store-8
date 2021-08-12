import React, { ReactElement } from 'react';

import { Router } from './lib/react-router/ReactRouter';

import Cart from '@src/pages/Cart/Cart';
import MyPage from '@pages/MyPage/MyPage';

interface Props {}

function App({}: Props): ReactElement {
  return (
    <Router>
      <MyPage />
      <Cart />
    </Router>
  );
}

export default App;
