import { dateStringFormat } from '@client/utils/date';
import React, { ReactElement } from 'react';
import * as S from './style';
import { IResult } from '../dummydata';

interface Props {
  result: IResult;
  key: number;
}

export default function RefundBox({ result, key }: Props): ReactElement {
  return (
    <S.RefundBox>
      <div className="column-date">
        <div>{dateStringFormat(new Date(result.date))}</div>
        <div>{result.orderNumber}</div>
      </div>
      <div className="column-title">
        <div className="wrapper-thumbnail">
          <img src={result.productImgSrc} />
        </div>
        <div className="container-title">
          <div className="text-title">{result.title}</div>
          {result.option ? <div className="text-option">{result.option}</div> : ''}
        </div>
      </div>
      <div className="column-product">
        <div>
          {result.productAmount}원 / <span>{result.productCount}개</span>
        </div>
      </div>
      <div className="column-status">
        <div>{result.state}</div>
      </div>
      <div className="column-confirm">
        <button>취소</button>
        <button>환불확정</button>
      </div>
    </S.RefundBox>
  );
}
