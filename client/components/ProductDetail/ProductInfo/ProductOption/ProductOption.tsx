import React, { ReactElement, useState } from 'react';
import * as S from './style';
import { IOption } from '@middle/type/product/options';
import ArrowDown from '@image/icon/arrowDownIcon.svg';
import { useProduct } from '@client/hooks/product/product';
import ProductOptionItem from './ProductOptionItem';

interface Props {
  optionData: IOption[];
}
export interface ISelectOption {
  id: number;
  title: string;
}

export default function ProductOption({ optionData }: Props): ReactElement {
  const { product } = useProduct();
  if (!product) return <></>;

  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSeletectedOption] = useState<ISelectOption[]>([
    { id: 59, title: '작은발' },
    { id: 60, title: '큰발' },
  ]);

  const toggleOpen = () => setIsOpen((isOpen) => !isOpen);

  const selectableOptionList = optionData.map((option) => {
    return (
      <li key={option.id} className="selectable-item">
        [{product.title}] {option.title}
      </li>
    );
  });

  const selectedOptionList = selectedOption.map((option) => {
    return <ProductOptionItem key={option.id} {...option} />;
  });

  return (
    <>
      <S.ProductOption isOpen={isOpen}>
        <S.InfoTitle>상품 선택</S.InfoTitle>
        <div>
          <ul onClick={toggleOpen} className="option__box">
            <li className="option__box-title">
              <div>상품선택</div>
              <ArrowDown className="option__down-arrow" />
            </li>
            {isOpen && (
              <ul className="option__selectable-wrapper">
                {selectableOptionList}
                {selectableOptionList}
                {selectableOptionList}
              </ul>
            )}
          </ul>
          {selectedOption.length && selectedOptionList}
        </div>
      </S.ProductOption>
    </>
  );
}
