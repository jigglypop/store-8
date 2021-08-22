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
  //isLiked 속성은 db처리 후 추가
  const isLiked = false;
  const { id, productImgSrc, title, originalAmount, amount } = product;

  return (
    <S.ProductDetail>
      <ImgMagifier src={productImgSrc} />
      <div className="product-detail__info">
        <ProductInfo {...{ title, originalAmount, amount }} />
        <DetailBtns {...{ id, isLiked }} />
      </div>
    </S.ProductDetail>
  );
}
