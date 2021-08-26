import React, { ReactElement, useState } from 'react';
import * as S from './style';
import { IOption } from '@middle/type/product/options';
import ArrowDown from '@image/icon/arrowDownIcon.svg';
import { useProduct } from '@client/hooks/product/product';
import ProductOptionItem from './ProductOptionItem';
import AlertModal from '@client/components/common/AlertModal/AlertModal';

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
  const [isOpenAlertModal, setIsOpenAlertModal] = useState(false);

  const toggleOpen = () => setIsOpen((isOpen) => !isOpen);
  const closeAlertModal = () => setIsOpenAlertModal(false);

  const handleOptionClick = (id: number) => {
    if (optionCount && id in optionCount) {
      setIsOpenAlertModal(true);
      return;
    }

    setOptionCount(id, 1);
  };

  const selectableOptionList = optionData.map(({ id, title }) => {
    return (
      <li key={id} onClick={() => handleOptionClick(id)} className="selectable-item">
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
          {optionCount && Object.keys(optionCount).length ? selectedOptionList : null}
        </div>
        {isOpenAlertModal && (
          <AlertModal msg="이미 선택한 옵션입니다." cancelCbFn={closeAlertModal} />
        )}
      </S.ProductOption>
    </>
  );
}
