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
  const { product, optionCount, setOptionCount } = useProduct();
  if (!product || !product.options) return <></>;

  const [isOpen, setIsOpen] = useState(false);

  const [selectedOption, setSeletectedOption] = useState<{ [key: string]: ISelectOption }>({});

  const toggleOpen = () => setIsOpen((isOpen) => !isOpen);

  const handleOptionClick = (id: number, title: string) => {
    if (id in selectedOption) {
      //이미 선택했다는 모달 혹은 토스트
      return;
    }
    setSeletectedOption({ ...selectedOption, [id]: { id, title } });
    setOptionCount(id, 1);
  };

  const selectableOptionList = optionData.map(({ id, title }) => {
    return (
      <li key={id} onClick={() => handleOptionClick(id, title)} className="selectable-item">
        [{title}] {title}
      </li>
    );
  });

  const selectedOptionList = optionCount
    ? Object.keys(optionCount).map((id) => {
        return <ProductOptionItem key={id} id={+id} />;
      })
    : null;

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
            {isOpen && <ul className="option__selectable-wrapper">{selectableOptionList}</ul>}
          </ul>
          {Object.keys(selectedOption).length ? selectedOptionList : null}
        </div>
      </S.ProductOption>
    </>
  );
}
