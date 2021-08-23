import React, { ReactElement, useState } from 'react';
import * as S from './style';
import { IOption } from '@middle/type/product/options';
import ArrowDown from '@image/icon/arrowDownIcon.svg';

interface Props {
  optionData: IOption[];
}

export default function ProductOption({ optionData }: Props): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.ProductOption>
      <S.InfoTitle>상품 선택</S.InfoTitle>
      <div className="option__box">
        <div>상품선택</div>
        <ArrowDown className="option__down-arrow" />
      </div>
      {isOpen && <ul></ul>}
    </S.ProductOption>
  );
}
