import React, { ReactElement, useState, useEffect } from 'react';
import * as S from './style';

interface Props {
  setShownResult: Function;
}

export default function RefundFilter({ setShownResult }: Props): ReactElement {
  const [clickedBtnIdx, setClickedBtnIdx] = useState(0);

  const isButtonClicked = (value: number): boolean => clickedBtnIdx == value;

  const onFilterButtonHandler = (e: React.MouseEvent) => {
    const { target } = e;
    if (!(target instanceof HTMLButtonElement)) return;
    setClickedBtnIdx(+target.value);
  };

  return (
    <S.RefundFilter onClick={onFilterButtonHandler}>
      <S.FilterButton value="0" isClicked={isButtonClicked(0)}>
        반품/환불 신청 내역
      </S.FilterButton>
      <S.FilterButton value="1" isClicked={isButtonClicked(1)}>
        반품/환불 처리 현황
      </S.FilterButton>
    </S.RefundFilter>
  );
}
