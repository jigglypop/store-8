import { ReactElement } from 'react';
import * as S from './style';

import ProductDetail from '@components/ProductDetail/ProductDetail';
import ProductDetailSection from '@src/components/ProductDetailSection/ProductDetailSection';

interface Props {}

export default function ProductDetailPage({}: Props): ReactElement {
  return (
    <S.ProductDetailPage>
      <ProductDetail />
      <ProductDetailSection />
    </S.ProductDetailPage>
  );
}
