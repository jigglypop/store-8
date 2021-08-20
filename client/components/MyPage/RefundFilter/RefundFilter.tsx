import React, { ReactElement, useState, useEffect } from 'react';
import * as S from './style';

interface Props {
  eventHandler: Function;
  index: number;
}

export default function RefundFilter({ eventHandler, index }: Props): ReactElement {
  const isButtonClicked = (value: number): boolean => index === value;

  return (
    <S.RefundFilter
      onClick={(e) => {
        eventHandler(e);
      }}
    >
      <S.FilterButton value="0" isClicked={isButtonClicked(0)}>
        반품/환불 신청 내역
      </S.FilterButton>
      <S.FilterButton value="1" isClicked={isButtonClicked(1)}>
        반품/환불 처리 현황
      </S.FilterButton>
    </S.RefundFilter>
  );
}
