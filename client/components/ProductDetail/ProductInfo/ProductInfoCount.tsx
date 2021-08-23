import { useState, Dispatch, ReactElement, SetStateAction, FormEvent } from 'react';
import * as S from './style';

import ProductCountForm from './ProductCountForm/ProductCountForm';

import { TITLE_BUY_AMOUNT } from '@constants/productDetail/productDetailInfo/productDetailInfo';

interface Props {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

export default function ProductInfoCount({ count, setCount }: Props): ReactElement {
  const [inputValue, setInputValue] = useState<string>(count + '');

  const handleClickCountMinus = () => {
    if (count <= 1) return;
    setCount((count) => count - 1);
    setInputValue((inputValue) => +inputValue - 1 + '');
  };

  const handleClickCountPlus = () => {
    if (count + 1 > 100) return;
    setCount((count) => count + 1);
    setInputValue((inputValue) => +inputValue + 1 + '');
  };
  const handleInputChange = ({ target }: { target: HTMLElement | null }) => {
    if (!(target instanceof HTMLInputElement)) return;
    if (+target.value > 100) setInputValue('99');
    else setInputValue(target.value);
    setInputValue(target.value);
  };

  const handleCountSumbit = (e: FormEvent) => {
    e.preventDefault();

    if (+inputValue <= 0) {
      setCount(1);
      setInputValue('1');
    } else if (+inputValue > 100) {
      setCount(100);
      setInputValue('100');
    } else {
      setCount(+inputValue);
    }
  };

  return (
    <S.ProductInfoCount>
      <S.InfoTitle>{TITLE_BUY_AMOUNT}</S.InfoTitle>
      <ProductCountForm
        {...{
          inputValue,
          handleCountSumbit,
          handleClickCountPlus,
          handleClickCountMinus,
          handleInputChange,
        }}
      />
    </S.ProductInfoCount>
  );
}
