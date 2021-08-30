import { ReactElement, useState, useEffect } from 'react';
import * as S from './style';
import * as CommonS from '../style';

import { DEFAULT_REVIEW_LIMIT } from '@middle/constants/default';

import ReviewForm from './ReviewForm/ReviewForm';
import ReviewItem from './ReviewItem/ReviewItem';
import Pagination from '@components/common/Pagination/Pagination';
import LoginNeedModal from '@components/common/LoginNeedModal/LoginNeedModal';
import AlertModal from '@components/common/AlertModal/AlertModal';

import { useOrderProduct } from '@client/hooks/order/orderProduct';
import { useReview } from '@client/hooks/review/review';
import { useCheck } from '@client/hooks/auth/check';
import { IOrder } from '@middle/type/myOrder/myOrder';

interface Props {}

export default function ProductReviewList({}: Props): ReactElement {
  const { totalCount, reviews, currentPage, setCurrentPage } = useReview();
  const { orderedProduct, getOrderedProduct } = useOrderProduct();
  const { check } = useCheck();
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const [isOpenAlertModal, setIsOpenAlertModal] = useState(false);
  const [alertMsg, setAlertMsg] = useState('');

  const getCreatableOrderInfo = (orderedProducts: IOrder[]) => {
    for (const order of orderedProducts) {
      if (order.reviewId) continue;
      return { orderId: order.id, status: order.state };
    }
    return null;
  };

  const checkOrderStatus = (status: string) => status === '구매확정';

  const closeReviewForm = () => setIsOpenForm(false);
  const closeLoginModal = () => setIsOpenLoginModal(false);
  const closeAlertModal = () => setIsOpenAlertModal(false);

  const orderInfo = getCreatableOrderInfo(orderedProduct);
  const openReviewForm = () => {
    if (!check) {
      setIsOpenLoginModal(true);
      return;
    }

    if (!orderInfo) {
      setAlertMsg('구매 후 이용 가능합니다.');
      setIsOpenAlertModal(true);
      return;
    }

    const orderStatus = checkOrderStatus(orderInfo.status);

    if (!orderStatus) {
      setAlertMsg('구매 확정 후 이용 가능합니다.');
      setIsOpenAlertModal(true);
      return;
    }

    setIsOpenForm(true);
  };

  useEffect(() => {
    getOrderedProduct();
  }, [isOpenForm]);

  const reviewList = reviews.map((data, idx) => {
    const reviewNo = totalCount - (currentPage - 1) * DEFAULT_REVIEW_LIMIT - idx;
    return <ReviewItem key={data.id} reviewData={data} reviewNo={reviewNo} />;
  });

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
        {totalCount !== 0 && (
          <Pagination
            totalCount={totalCount}
            defaultLimit={DEFAULT_REVIEW_LIMIT}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </S.ProductReviewList>
      {isOpenForm && <ReviewForm closeReviewForm={closeReviewForm} orderId={orderInfo?.orderId} />}
      {isOpenLoginModal && <LoginNeedModal cancelCbFn={closeLoginModal} />}
      {isOpenAlertModal && <AlertModal msg={alertMsg} cancelCbFn={closeAlertModal} />}
    </>
  );
}
