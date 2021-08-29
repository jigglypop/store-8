import React, { useState, ReactElement, FormEvent } from 'react';
import * as S from './style';

import XIcon from '@image/icon/xIcon.svg';
import ProductCountForm from '../ProductCountForm/ProductCountForm';
import { useProduct } from '@client/hooks/product/product';
import { IOption } from '@middle/type/product/options';

interface Props {
  id: number;
}

export default function ProductOptionItem({ id }: Props): ReactElement {
  const { product, optionCount, setOptionCount, deleteOptionCount } = useProduct();
  const [inputValue, setInputValue] = useState<string>(optionCount[id] + '' || '1');

  const handleClickCountMinus = () => {
    if (optionCount[id] <= 1) return;
    setOptionCount(id, optionCount[id] - 1);
    setInputValue(optionCount[id] - 1 + '');
  };

  const handleClickCountPlus = () => {
    if (optionCount[id] + 1 > 100) return;
    setOptionCount(id, optionCount[id] + 1);
    setInputValue(optionCount[id] + 1 + '');
  };
  const handleInputChange = ({ target }: { target: HTMLElement | null }) => {
    if (!(target instanceof HTMLInputElement)) return;
    if (target.value.length > 3) return;
    if (+target.value > 100) setInputValue('99');
    else setInputValue(target.value);
    setInputValue(target.value);
  };

  const handleCountSumbit = (e: FormEvent) => {
    e.preventDefault();

    if (+inputValue <= 0) {
      setOptionCount(id, 1);
      setInputValue('1');
    } else if (+inputValue > 100) {
      setOptionCount(id, 100);
      setInputValue('100');
    } else {
      setInputValue(Math.floor(+inputValue) + '');
      setOptionCount(id, Math.floor(+inputValue));
    }
  };

  const getTitle = (id: number, options: IOption[]) => {
    for (const option of options) {
      if (id === option.id) return option.title;
    }
  };

  const handleClickDeleteBtn = () => {
    deleteOptionCount(id);
  };

  return (
    <S.ProductOptionItem className="option-item__selected">
      <div className="option-item__title">
        <div>{getTitle(id, product?.options)}</div>
        <XIcon onClick={handleClickDeleteBtn} className="option-item__delete-btn" />
      </div>
      <div>
        <ProductCountForm
          {...{
            inputValue,
            handleCountSumbit,
            handleClickCountPlus,
            handleClickCountMinus,
            handleInputChange,
          }}
        />
      </div>
    </S.ProductOptionItem>
  );
}
