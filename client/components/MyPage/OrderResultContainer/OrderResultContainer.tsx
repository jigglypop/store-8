import React, { ReactElement } from 'react';

import * as S from './style';

import OrderBox from '../OrderBox/OrderBox';
import { TextNoData } from '@components/MyPage/common/style';
import { useMyOrder } from '@client/hooks/myOrder/myOrder';
import { useMyReview } from '@client/hooks/my/useMyReview';

interface Props {}

export default function OrderResultContainer({}: Props): ReactElement {
  const { myReviews } = useMyReview();
  const { myOrder } = useMyOrder();

  return (
    <S.OrderResultContainer>
      <h4>
        주문목록 / 배송조회 내역 <b>{myOrder.length}</b>건
      </h4>
      <div className="container-column">
        <div className="column-date">날짜/주문번호</div>
        <div className="column-title">상품명/옵션</div>
        <div className="column-price">상품금액/수량</div>
        <div className="column-status">주문상태</div>
        <div className="column-check">확인/리뷰</div>
      </div>
      {!myOrder.length ? (
        <div className={'container-result-list no-data'}>
          <TextNoData>조회 내역이 없습니다.</TextNoData>
        </div>
      ) : (
        <div className={'container-result-list'}>
          {myOrder.map((data, idx) => (
            <OrderBox result={data} key={idx} />
          ))}
        </div>
      )}
    </S.OrderResultContainer>
  );
}
