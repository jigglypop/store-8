import { ReactElement } from 'react';
import * as S from './style';
import * as CommonS from '../style';

interface Props {}

export default function ProductQuestionList({}: Props): ReactElement {
  return (
    <S.ProductQuestionList>
      <CommonS.UserFeedbackTitleContainer>
        <div className="title">상품문의</div>
        <button className="create-review-btn">상품문의 글쓰기</button>
      </CommonS.UserFeedbackTitleContainer>
    </S.ProductQuestionList>
  );
}
