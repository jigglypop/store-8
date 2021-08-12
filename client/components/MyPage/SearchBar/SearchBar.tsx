import React, { ReactElement, useState } from 'react';
import * as S from './style';

interface Props {}

export default function SearchBar({}: Props): ReactElement {
  const [selectedOffset, setSelectedOffset] = useState(1);

  const radioButtonHandler = (e: React.MouseEvent) => {
    const { target } = e;
    if (!(target instanceof HTMLButtonElement)) return;

    setSelectedOffset(+target.value);
  };

  return (
    <S.SearchBar>
      <h3>주문목록/배송조회</h3>
      <div className="container-input">
        <div>조회기간</div>
        <div onClick={radioButtonHandler}>
          <S.OffsetRadioButton value="0" isSelected={selectedOffset === 0}>
            오늘
          </S.OffsetRadioButton>
          <S.OffsetRadioButton value="1" isSelected={selectedOffset === 1}>
            7일
          </S.OffsetRadioButton>
          <S.OffsetRadioButton value="2" isSelected={selectedOffset === 2}>
            15일
          </S.OffsetRadioButton>
          <S.OffsetRadioButton value="3" isSelected={selectedOffset === 3}>
            1개월
          </S.OffsetRadioButton>
          <S.OffsetRadioButton value="4" isSelected={selectedOffset === 4}>
            3개월
          </S.OffsetRadioButton>
          <S.OffsetRadioButton value="5" isSelected={selectedOffset === 5}>
            1년
          </S.OffsetRadioButton>
        </div>
        <div>
          <input type="date" name="startDate" id="startDate" />
          ~
          <input type="date" name="endDate" id="endDate" />
        </div>
        <button className="button-search">조회 Q</button>
      </div>
    </S.SearchBar>
  );
}
