import { ReactElement, useState } from 'react';
import * as S from './style';

import {
  SECTION_DETAIL_KEY,
  SECTION_SEVERAL_KEY,
  SECTION_REVIEW_KEY,
  SECTION_QUESTION_KEY,
} from '@constants/productDetail/productDetailSection/ProductDetailSection';

import SectionNav from './SectionNav/SectionNav';
import DetailInfo from './DetailInfo/DetailInfo';
import DeliveryInfo from './DeliveryInfo/DeliveryInfo';
import RefundInfo from './RefundInfo/RefundInfo';
import ProductReviewList from './ProductReviewList/ProductReviewList';
import ProductQuestionList from './ProductQuestionList/ProductQuestionList';

import { useQuestion } from '@client/hooks/question/question';
import { useReview } from '@client/hooks/review/review';

interface Props {}

export default function ProductDetailSection({}: Props): ReactElement {
  const { totalCount: questionCount } = useQuestion();
  const { totalCount: reviewCount } = useReview();
  // const [section, setSection] = useState(SECTION_REVIEW_KEY);
  const [section, setSection] = useState(SECTION_DETAIL_KEY);

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
    <S.ProductDetailSection>
      <SectionNav
        reviewCount={reviewCount}
        questionCount={questionCount}
        {...{ section, setSection }}
      />
      {detailSection[section]}
    </S.ProductDetailSection>
  );
}
