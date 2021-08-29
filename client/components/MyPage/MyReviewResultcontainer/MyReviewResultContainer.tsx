import { ReactElement } from 'react';
import * as S from './style';

import { TextNoData } from '../ProductBox/style';
import { useMyReview } from '@client/hooks/my/useMyReview';
import { IMyReview } from '@middle/type/review/review';
import MyReviewBox from '../MyReviewBox/MyReviewBox';
import Pagination from '@components/common/Pagination/Pagination';

import { DEFAULT_MYREVIEW_LIMIT } from '@middle/constants/default';

interface Props {}

export default function MyReviewResultContainer({}: Props): ReactElement {
  const { myReviews, totalCount, currentPage, setCurrentPage } = useMyReview();

  const myReviewList = !myReviews.length ? (
    <TextNoData>조회 내역이 없습니다.</TextNoData>
  ) : (
    myReviews.map((reviewData: IMyReview) => (
      <MyReviewBox key={reviewData.id} reviewData={reviewData} />
    ))
  );

  return (
    <S.MyReviewResultContainer>
      <h4>
        나의 상품후기 <b>{totalCount}</b>건
      </h4>
      <div className="container-column">
        <div className="column-score">평가점수</div>
        <div className="column-product-title">상품</div>
        <div className="column-title">문의 제목</div>
        <div className="column-date">날짜</div>
      </div>
      <ul className="container-result-list">{myReviewList}</ul>
      {totalCount !== 0 && (
        <Pagination
          totalCount={totalCount}
          defaultLimit={DEFAULT_MYREVIEW_LIMIT}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </S.MyReviewResultContainer>
  );
}
