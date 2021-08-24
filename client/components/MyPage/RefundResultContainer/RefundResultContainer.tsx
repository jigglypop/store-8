import React, { ReactElement, useEffect } from 'react';
import RefundBox from '../RefundBox/RefundBox';
import { TextNoData } from '@components/MyPage/common/style';
import * as S from './style';
import { useMyRefund } from '@client/hooks/myRefund/myRefund';
import { IRefund } from '@middle/type/myRefund/myRefund';

interface Props {
  filterIndex: number;
}

export default function RefundResultContainer({ filterIndex }: Props): ReactElement {
  const { myRefund } = useMyRefund();

  const resultBoxList = myRefund
    .filter((result: IRefund) => filterIndex == (result.isConfirmed ? 1 : 0))
    .map((data, idx) => <RefundBox result={data} key={idx} />);
  // result.state == (filterButtonIndex ? '처리완료' : '반품신청')

  return (
    <S.RefundResultContainer>
      <h4>
        반품/환불 내역 총 <b>{resultBoxList.length}</b>건
      </h4>
      <div className="container-column">
        <div className="column-date">날짜/주문번호</div>
        <div className="column-title">상품명/옵션</div>
        <div className="column-price">상품금액/수량</div>
        <div className="column-status">주문상태</div>
        <div className="column-check">취소/확인</div>
      </div>
      {!resultBoxList.length ? (
        <div className={'container-result-list no-data'}>
          <TextNoData>조회 내역이 없습니다.</TextNoData>
        </div>
      ) : (
        <div className={'container-result-list'}>{resultBoxList}</div>
      )}
    </S.RefundResultContainer>
  );
}
