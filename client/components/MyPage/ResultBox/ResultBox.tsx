import { dateStringFormat } from '@client/utils/date';
import React, { ReactElement } from 'react';
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
  thumbnailSrc: string;
}

interface Props {
  result: IResult;
}

export default function ResultBox({ result }: Props): ReactElement {
  return (
    <S.ResultBox>
      <div className="column-date">
        <div>{dateStringFormat(result.date)}</div>
        <div>{result.orderNumber}</div>
      </div>
      <div className="column-title">
        <div className="wrapper-thumbnail">
          <img src={result.thumbnailSrc} />
        </div>
        <div className="container-title">
          <div className="text-title">{result.title}</div>
          {result.option ? <div className="text-option">{result.option}</div> : ''}
        </div>
      </div>
      <div className="column-product">
        <div>
          {result.productPrice}원 / <span>{result.productCount}개</span>
        </div>
      </div>
      <div className="column-status">
        <div>{result.status}</div>
      </div>
      <div className="column-confirm">
        <button>취소</button>
        <button>구매확정</button>
        <button>리뷰쓰기</button>
      </div>
    </S.ResultBox>
  );
}
