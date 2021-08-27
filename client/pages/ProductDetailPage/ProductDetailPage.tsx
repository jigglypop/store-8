import * as S from './style';

import ProductDetail from '@components/ProductDetail/ProductDetail';
import ProductDetailSection from '@client/components/ProductDetailSection/ProductDetailSection';

export default function ProductDetailPage() {
  return (
    <S.ProductDetailPage>
      <ProductDetail />
      <ProductDetailSection />
    </S.ProductDetailPage>
  );
}
