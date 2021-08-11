import React, { ReactElement } from 'react';

import MyPage from '@src/pages/MyPage/MyPage';

interface Props {}

function App({}: Props): ReactElement {
  return (
    <>
      <MyPage />
    </>
  );
}

export default App;
