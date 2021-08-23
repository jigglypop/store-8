import React, { useState, ReactElement, FormEvent } from 'react';
import * as S from './style';

import XIcon from '@image/icon/xIcon.svg';
import ProductCountForm from '../ProductCountForm/ProductCountForm';
import { useProduct } from '@client/hooks/product/product';

interface Props {
  id: number;
  title: string;
}

export default function ProductOptionItem({ id, title }: Props): ReactElement {
  const { optionCount, setOptionCount } = useProduct();
  const [inputValue, setInputValue] = useState<string>('1');

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
      setOptionCount(id, +inputValue);
    }
  };

  return (
    <S.ProductOptionItem className="option-item__selected">
      <div className="option-item__title">
        <div>{title}</div>
        <XIcon className="option-item__delete-btn" />
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
