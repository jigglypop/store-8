import { ReactElement } from 'react';
import * as S from './style';

import ImgMagifier from './ImgMagnifier/ImgMagifier';
import ProductInfo from './ProductInfo/ProductInfo';
import DetailBtns from './DetailBtns /DetailBtns';

import { useProduct } from '@client/hooks/product/product';

interface Props {}

export default function ProductDetail({}: Props): ReactElement {
  const { product, loading, error } = useProduct();
  if (!product) return <></>;

  const { id, productImgSrc, title, originalAmount, amount } = product;

  return (
    <S.ProductDetail>
      <ImgMagifier src={productImgSrc} />
      <div className="product-detail__info">
        <ProductInfo {...{ title, originalAmount, amount }} />
        <DetailBtns {...{ id, title }} />
      </div>
    </S.ProductDetail>
  );
}
