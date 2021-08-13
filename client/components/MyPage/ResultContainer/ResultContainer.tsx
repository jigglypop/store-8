import React, { ReactElement } from 'react';
import ResultBox from '../ResultBox/ResultBox';
import { TextNoData } from '../ResultBox/style';
import * as S from './style';

interface IResult {
  date: Date;
  id: number;
  orderNumber: string;
  title: string;
  option?: string;
  productPrice: number;
  productCount: number;
  status: string; // 주문상태
  checkOrReview: string; // 확인/리뷰
}

interface Props {
  results: IResult[];
  title: string;
}

export default function ResultContainer({ title, results }: Props): ReactElement {
  return (
    <S.ResultContainer>
      <h4>
        {title} {0 /* results.length */}건
      </h4>
      <div className="container-column">
        <div className="column-date">날짜/주문번호</div>
        <div className="column-title">상품명/옵션</div>
        <div className="column-price">상품금액/수량</div>
        <div className="column-status">주문상태</div>
        <div className="column-check">확인/리뷰</div>
      </div>
      <div className={'container-result-list' + (results.length === 0) ? 'nodata' : ''}>
        <TextNoData>조회 내역이 없습니다.</TextNoData>
        <ResultBox result={results[0]} />
        <ResultBox result={results[1]} />
        <ResultBox result={results[1]} />
        <ResultBox result={results[1]} />
        <ResultBox result={results[1]} />
        <ResultBox result={results[1]} />
      </div>
    </S.ResultContainer>
  );
}

//<div className="text-no-data">조회 내역이 없습니다.</div>
