import { useState, ReactElement, FormEvent } from 'react';
import * as S from './style';

import { TITLE_BUY_AMOUNT } from '@constants/productDetail/productDetailInfo/productDetailInfo';

import ProductCountForm from './ProductCountForm/ProductCountForm';

import { useProduct } from '@client/hooks/product/product';

interface Props {}

export default function ProductInfoCount({}: Props): ReactElement {
  const { count, setCount } = useProduct();
  const [inputValue, setInputValue] = useState<string>(count + '');

  const handleClickCountMinus = () => {
    if (count <= 1) return;
    setCount(count - 1);
    setInputValue((inputValue) => +inputValue - 1 + '');
  };

  const handleClickCountPlus = () => {
    if (count + 1 > 100) return;
    setCount(count + 1);
    setInputValue((inputValue) => +inputValue + 1 + '');
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
      setCount(1);
      setInputValue('1');
    } else if (+inputValue > 100) {
      setCount(100);
      setInputValue('100');
    } else {
      setCount(Math.floor(+inputValue));
      setInputValue(Math.floor(+inputValue) + '');
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
