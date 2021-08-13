import { ReactElement, useState } from 'react';

import SectionNav from './SectionNav/SectionNav';
import DetailInfo from './DetailInfo/DetailInfo';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import RefundInfo from './RefundInfo/RefundInfo';
import ProductReviewList from './ProductReviewList/ProductReviewList';
import styled from 'styled-components';
import ProductQuestionList from './ProductQuestionList/ProductQuestionList';

interface Props {}

export default function ProductDetailSection({}: Props): ReactElement {
  const [section, setSection] = useState(0);

  const detailSection: ReactElement[] = [
    <DetailInfo />,
    <DeliveryInfo />,
    <RefundInfo />,
    <ProductReviewList />,
    <ProductQuestionList />,
  ];

  return (
    <StyledProductDetailSection>
      <SectionNav reviewCount={999} questionCount={3} {...{ section, setSection }} />
      {detailSection[section]}
    </StyledProductDetailSection>
  );
}

const StyledProductDetailSection = styled.div`
  margin-bottom: 3rem;
`;
