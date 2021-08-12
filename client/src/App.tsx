import { ReactElement } from 'react';
import ProductDetailPage from '@pages/ProductDetailPage/ProductDetailPage';
import styled from 'styled-components';
import { Router } from './lib/react-router/ReactRouter';
import Cart from '@src/pages/Cart/Cart';
import MyPage from '@pages/MyPage/MyPage';

interface Props {}

function App({}: Props): ReactElement {
  return (
    <>
      <Router>
        <SampleHeader />
        <ProductDetailPage />
        <MyPage />
        <Cart />
      </Router>
    </>
  );
}

export default App;

const SampleHeader = styled.div`
  height: 100px;
`;
