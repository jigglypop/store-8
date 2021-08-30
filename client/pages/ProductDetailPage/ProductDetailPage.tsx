import { useEffect } from 'react';
import * as S from './style';
import { useDispatch } from 'react-redux';

import ProductDetail from '@components/ProductDetail/ProductDetail';
import ProductDetailSection from '@client/components/ProductDetailSection/ProductDetailSection';

import { initProduct } from '@client/store/product/product';

export default function ProductDetailPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(initProduct());
    };
  }, []);

  return (
    <S.ProductDetailPage>
      <ProductDetail />
      <ProductDetailSection />
    </S.ProductDetailPage>
  );
}
