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
}

interface Props {
  result: IResult;
}

export default function ResultBox({ result }: Props): ReactElement {
  return (
    <S.ResultBox>
      <div>hello world!</div>
    </S.ResultBox>
  );
}
