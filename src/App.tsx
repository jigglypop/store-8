import React, { ReactElement } from 'react';

import TestIcon from '@public/image/icon.svg';

interface Props {}

function App({}: Props): ReactElement {
  return (
    <>
      <h1>hello world</h1>
      <TestIcon />
    </>
  );
}

export default App;
