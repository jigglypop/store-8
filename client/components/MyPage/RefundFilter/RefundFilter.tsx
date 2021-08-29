import React, { ReactElement, useState, useEffect } from 'react';
import * as S from './style';
import { useMyRefund } from '@client/hooks/myRefund/myRefund';

interface Props {
  filterIndex: number;
  eventHandler: Function;
}

export default function RefundFilter({ filterIndex, eventHandler }: Props): ReactElement {
  const isButtonClicked = (value: number): boolean => filterIndex === value;

  const onFilterButtonHandler = (e: React.MouseEvent) => {
    const { target } = e;
    if (!(target instanceof HTMLButtonElement)) return;
    eventHandler(+target.value);
  };

  return (
    <S.RefundFilter
      onClick={(e) => {
        onFilterButtonHandler(e);
      }}
    >
      <S.FilterButton value="0" isClicked={isButtonClicked(0)}>
        반품/환불 처리대기 내역
      </S.FilterButton>
      <S.FilterButton value="1" isClicked={isButtonClicked(1)}>
        반품/환불 처리완료 내역
      </S.FilterButton>
    </S.RefundFilter>
  );
}
