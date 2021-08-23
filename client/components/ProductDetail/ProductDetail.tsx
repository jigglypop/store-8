import { ReactElement } from 'react';
import * as S from './style';

import ImgMagifier from './ImgMagnifier/ImgMagifier';
import ProductInfo from './ProductInfo/ProductInfo';
import DetailBtns from './DetailBtns /DetailBtns';

import { useProduct } from '@client/hooks/product/product';

interface Props {}

export default function ProductDetail({}: Props): ReactElement {
  const { product, loading, error } = useProduct();
  console.log(product);
  if (!product) return <></>;

  const { id, productImgSrc, title, originalAmount, amount, options } = product;

  return (
    <S.ProductDetail>
      <ImgMagifier src={productImgSrc} />
      <div className="product-detail__info">
        <ProductInfo />
        <DetailBtns {...{ id, title }} />
      </div>
    </S.ProductDetail>
  );
}
