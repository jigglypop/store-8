import { ReactElement } from 'react';
import * as S from './style';

import ImgMagifier from './ImgMagnifier/ImgMagifier';
import ProductInfo from './ProductInfo/ProductInfo';
import DetailBtns from './DetailBtns /DetailBtns';
import ProductInfoTitle from './ProductInfo/ProductInfoTitle';

import { useProduct } from '@client/hooks/product/product';
import { Desktop, Tablet, Mobile } from '../common/ResponseComp/ResponseComp';

interface Props {}

export default function ProductDetail({}: Props): ReactElement {
  const { product } = useProduct();

  if (!product) return <></>;

  const { id, productImgSrc, title } = product;

  return (
    <S.ProductDetail>
      <Desktop>
        <ImgMagifier src={productImgSrc} />
        <div className="product-detail__info">
          <ProductInfoTitle />
          <ProductInfo />
          <DetailBtns {...{ id, title }} />
        </div>
      </Desktop>
      <Tablet>
        <ImgMagifier src={productImgSrc} />
        <div className="product-detail__info">
          <ProductInfoTitle />
          <ProductInfo />
          <DetailBtns {...{ id, title }} />
        </div>
      </Tablet>
      <Mobile>
        <div className="product-detail__info">
          <ProductInfoTitle />
          <ImgMagifier src={productImgSrc} />
          <ProductInfo />
          <DetailBtns {...{ id, title }} />
        </div>
      </Mobile>
    </S.ProductDetail>
  );
}
