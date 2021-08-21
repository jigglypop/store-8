import { ReactElement, useState } from 'react';
import * as S from './style';
import * as CommonS from '../style';
import { useReview } from '@client/hooks/review/review';
import ReviewItem from './ReviewItem/ReviewItem';

interface Props {}

export default function ProductReviewList({}: Props): ReactElement {
  const { review, loading, error } = useReview();
  const [isOpenForm, setIsOpenForm] = useState(false);

  //TODO USERID 목데이터 사용 중 로그인 적용 시 수정 예정
  const reviewList = review.map((data, idx) => {
    return <ReviewItem key={data.id} reviewData={data} idx={idx} userId="testId" />;
  });

  return (
    <S.ProductReviewList>
      <CommonS.UserFeedbackTitleContainer>
        <div className="title">상품후기</div>
        <button className="create-review-btn">상품후기 글쓰기</button>
      </CommonS.UserFeedbackTitleContainer>
      <CommonS.UserPostingList>
        {reviewList.length ? (
          reviewList
        ) : (
          <li className="empty-msg">등록된 상품문의가 없습니다.</li>
        )}
      </CommonS.UserPostingList>
    </S.ProductReviewList>
  );
}
