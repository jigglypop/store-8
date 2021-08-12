import { ReactElement } from 'react';
import * as S from './style';
import * as CommonS from '../style';

interface Props {}

export default function ProductReviewList({}: Props): ReactElement {
  return (
    <S.ProductReviewList>
      <CommonS.UserFeedbackTitleContainer>
        <div className="title">상품후기</div>
        <button className="create-review-btn">상품후기 글쓰기</button>
      </CommonS.UserFeedbackTitleContainer>
    </S.ProductReviewList>
  );
}
