import React, { ReactElement } from 'react';
import { Router } from './lib/react-router/ReactRouter';
import MyPage from '@pages/MyPage/MyPage';

interface Props {}

function App({}: Props): ReactElement {
  return (
    <Router>
      <MyPage />
    </Router>
  );
}

export default App;
