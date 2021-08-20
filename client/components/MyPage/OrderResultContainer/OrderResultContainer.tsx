import React, { ReactElement } from 'react';
import OrderBox from '../OrderBox/OrderBox';
import { TextNoData } from '../OrderBox/style';
import * as S from './style';

import { IResult, _filteredResults, sampleData } from '../dummydata';

interface Props {
  results: IResult[];
  title: string;
}

export default function OrderResultContainer({ title, results }: Props): ReactElement {
  const resultBoxList = results.map((data, idx) => {
    return <OrderBox result={data} key={idx} />;
  });

  return (
    <S.OrderResultContainer>
      <h4>
        {title} <b>{results.length}</b>건
      </h4>
      <div className="container-column">
        <div className="column-date">날짜/주문번호</div>
        <div className="column-title">상품명/옵션</div>
        <div className="column-price">상품금액/수량</div>
        <div className="column-status">주문상태</div>
        <div className="column-check">확인/리뷰</div>
      </div>
      <div className={'container-result-list' + (results.length === 0) ? 'nodata' : ''}>
        {!results.length ? <TextNoData>조회 내역이 없습니다.</TextNoData> : resultBoxList}
      </div>
    </S.OrderResultContainer>
  );
}

//<div className="text-no-data">조회 내역이 없습니다.</div>
