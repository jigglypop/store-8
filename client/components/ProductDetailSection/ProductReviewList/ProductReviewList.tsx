import { ReactElement, useState } from 'react';
import * as S from './style';
import * as CommonS from '../style';
import { useReview } from '@client/hooks/review/review';

import ReviewForm from './ReviewForm/ReviewForm';
import ReviewItem from './ReviewItem/ReviewItem';
import Pagination from '@components/common/Pagination/Pagination';
import { DEFAULT_REVIEW_LIMIT } from '@middle/constants/default';

interface Props {}

export default function ProductReviewList({}: Props): ReactElement {
  const { totalCount, reviews, currentPage, setCurrentPage, loading, error } = useReview();
  const [isOpenForm, setIsOpenForm] = useState(false);

  //TODO USERID 목데이터 사용 중 로그인 적용 시 수정 예정
  const reviewList = reviews.map((data, idx) => {
    const reviewNo = totalCount - (currentPage - 1) * DEFAULT_REVIEW_LIMIT - idx;

    return <ReviewItem key={data.id} reviewData={data} reviewNo={reviewNo} userId="testId" />;
  });

  const openReviewForm = () => setIsOpenForm(true);

  const closeReviewForm = () => setIsOpenForm(false);

  return (
    <>
      <S.ProductReviewList>
        <CommonS.UserFeedbackTitleContainer>
          <div className="title">상품후기</div>
          <button onClick={openReviewForm} className="create-review-btn">
            상품후기 글쓰기
          </button>
        </CommonS.UserFeedbackTitleContainer>
        <CommonS.UserPostingList>
          {reviewList.length ? (
            reviewList
          ) : (
            <li className="empty-msg">등록된 상품문의가 없습니다.</li>
          )}
        </CommonS.UserPostingList>
        <Pagination
          totalCount={totalCount}
          defaultLimit={DEFAULT_REVIEW_LIMIT}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </S.ProductReviewList>
      {isOpenForm && <ReviewForm closeReviewForm={closeReviewForm} />}
    </>
  );
}
