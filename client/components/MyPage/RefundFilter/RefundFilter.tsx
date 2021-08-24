import React, { ReactElement, useState, useEffect } from 'react';
import * as S from './style';
import { useMyRefund } from '@client/hooks/myRefund/myRefund';

interface Props {
  filterIndex: number;
  eventHandler: Function;
}

export default function RefundFilter({ filterIndex, eventHandler }: Props): ReactElement {
  useEffect(() => console.log(filterIndex), [filterIndex]);

  const isButtonClicked = (value: number): boolean => filterIndex === value;

  const onFilterButtonHandler = (e: React.MouseEvent) => {
    const { target } = e;
    if (!(target instanceof HTMLButtonElement)) return;
    console.log(`${target.value} click 했습니다`);
    eventHandler(+target.value);
  };

  return (
    <S.RefundFilter
      onClick={(e) => {
        onFilterButtonHandler(e);
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
