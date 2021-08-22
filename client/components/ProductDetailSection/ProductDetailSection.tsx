import { ReactElement, useState } from 'react';

import SectionNav from './SectionNav/SectionNav';
import DetailInfo from './DetailInfo/DetailInfo';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import RefundInfo from './RefundInfo/RefundInfo';
import ProductReviewList from './ProductReviewList/ProductReviewList';
import styled from 'styled-components';
import ProductQuestionList from './ProductQuestionList/ProductQuestionList';

import {
  SECTION_DETAIL_KEY,
  SECTION_SEVERAL_KEY,
  SECTION_REVIEW_KEY,
  SECTION_QUESTION_KEY,
} from '@constants/productDetail/productDetailSection/ProductDetailSection';
import { useQuestion } from '@client/hooks/question/question';
import { useReview } from '@client/hooks/review/review';

interface Props {}

export default function ProductDetailSection({}: Props): ReactElement {
  const { question } = useQuestion();
  const { review } = useReview();
  const [section, setSection] = useState(SECTION_REVIEW_KEY);

  const detailSection: { [key: string]: ReactElement } = {
    [SECTION_DETAIL_KEY]: <DetailInfo />,
    [SECTION_SEVERAL_KEY]: (
      <>
        <DeliveryInfo />
        <RefundInfo />
      </>
    ),
    [SECTION_REVIEW_KEY]: <ProductReviewList />,
    [SECTION_QUESTION_KEY]: <ProductQuestionList />,
  };

  return (
    <StyledProductDetailSection>
      <SectionNav
        reviewCount={review.length}
        questionCount={question.length}
        {...{ section, setSection }}
      />
      {detailSection[section]}
    </StyledProductDetailSection>
  );
}

const StyledProductDetailSection = styled.div`
  margin-bottom: 3rem;
`;
