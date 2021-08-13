import * as S from './style';

import ProductDetail from '@components/ProductDetail/ProductDetail';
import ProductDetailSection from '@client/components/ProductDetailSection/ProductDetailSection';
import { IPage, IPageQuery } from '@client/utils/router';

export default function ProductDetailPage() {
  return (
    <S.ProductDetailPage>
      <ProductDetail />
      <ProductDetailSection />
    </S.ProductDetailPage>
  );
}
