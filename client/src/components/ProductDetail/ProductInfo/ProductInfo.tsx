import { ReactElement } from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  amount: number;
  delivery_info: string;
}

export default function ProductInfo({ title, amount, delivery_info }: Props): ReactElement {
  return (
    <StyledProductInfo>
      <div className="product__info">
        <h3 className="producto-info__title">제목</h3>
      </div>
      <div className="product__total-info"></div>
    </StyledProductInfo>
  );
}

const StyledProductInfo = styled.div`
  display: flex;
`;
