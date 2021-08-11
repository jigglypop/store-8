import { ReactElement } from 'react';
import styled from 'styled-components';

import sampleThumbnail from '@image/sample1/sample-thumbnail.jpeg';

import ZoomImg from './ZoomImg/ZoomImg';
import ProductInfo from './ProductInfo/ProductInfo';
import DetailBtns from './DetailBtns /DetailBtns';

interface Props {}

export default function ProductDetail({}: Props): ReactElement {
  const { id, img, title, originAmount, amount, delivery_info, isLiked } = sampleData;
  return (
    <StyledProductDetail>
      <ZoomImg src={img} />
      <div className="product-detail__info">
        <ProductInfo {...{ title, originAmount, amount, delivery_info }} />
        <DetailBtns {...{ id, isLiked }} />
      </div>
    </StyledProductDetail>
  );
}

const StyledProductDetail = styled.div`
  display: flex;
  gap: 80px;

  height: 530px;
  .product-detail__info {
    margin-top: 8px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const sampleData = {
  id: '1234',
  img: sampleThumbnail,
  title: '맥주짠 세트',
  originAmount: 20000,
  amount: 10900,
  delivery_info: {
    fee: '2,500원 (3만원 이상 구매시 무료)',
    timeLimit: '오후 2시 당일배송마감',
  },
  isLiked: false,
};
