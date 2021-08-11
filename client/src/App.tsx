import { ReactElement } from 'react';
import ProductDetailPage from '@pages/ProductDetailPage/ProductDetailPage';
import styled from 'styled-components';

interface Props {}

function App({}: Props): ReactElement {
  return (
    <>
      <SampleHeader />
      <ProductDetailPage />
    </>
  );
}

export default App;

const SampleHeader = styled.div`
  height:100px;
`;
