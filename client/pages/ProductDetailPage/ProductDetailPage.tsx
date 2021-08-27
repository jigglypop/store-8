import * as S from './style';

import ProductDetail from '@components/ProductDetail/ProductDetail';
import ProductDetailSection from '@client/components/ProductDetailSection/ProductDetailSection';
import { IPage, IPageQuery } from '@client/utils/router';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
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
