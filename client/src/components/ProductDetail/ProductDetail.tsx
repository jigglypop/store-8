import { ReactElement } from 'react';
import styled from 'styled-components';

import ZoomImg from './ZoomImg/ZoomImg';
import ProductInfo from './ProductInfo/ProductInfo';
import DetailBtns from './DetailBtns /DetailBtns';

interface Props {}

export default function ProductDetail({}: Props): ReactElement {
  const { id, img, title, amount, delivery_info, isLiked } = sampleData;
  return (
    <StyledProductDetail>
      <ZoomImg src={img} />
      <div>
        <ProductInfo {...{ title, amount, delivery_info }} />
        <DetailBtns {...{ id, isLiked }} />
      </div>
    </StyledProductDetail>
  );
}

const StyledProductDetail = styled.div`
  display: flex;
`;

const sampleData = {
  id: '1234',
  img: 'https://cdn.pixabay.com/photo/2014/08/10/18/06/beers-414914_960_720.jpg',
  title: '맥주짠 세트',
  amount: 10900,
  delivery_info: '2,500원 (3만원 이상 구매시 무료) 오후 2시 당일배송마감',
  isLiked: false,
};
