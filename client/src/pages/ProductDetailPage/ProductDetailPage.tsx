import { ReactElement } from 'react';
import * as S from './style';

import ProductDetail from '@components/ProductDetail/ProductDetail';

interface Props {}

export default function ProductDetailPage({}: Props): ReactElement {
  return (
    <S.ProductDetailPage>
      <ProductDetail />
    </S.ProductDetailPage>
  );
}
