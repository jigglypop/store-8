import { ReactElement } from 'react';

import ProductDetail from '@components/ProductDetail/ProductDetail';
import ProductDetailSection from '@components/ProductDetailSection/ProductDetailSection';

export default function ProductDetailDeskop(): ReactElement {
  return (
    <>
      <ProductDetail />
      <ProductDetailSection />
    </>
  );
}
