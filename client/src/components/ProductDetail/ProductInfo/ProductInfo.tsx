import React, { ReactElement, useState } from 'react';
import * as S from './style';

import PlusIcon from '@image/plusIcon.svg';
import MinusIcon from '@image/minusIcon.svg';

interface Props {
  title: string;
  amount: number;
  delivery_info: string;
}

export default function ProductInfo({ title, amount, delivery_info }: Props): ReactElement {
  const [count, setCount] = useState(1);
  const [inputValue, setInputValue] = useState<string>(count + '');

  const handleClickCountMinus = () => {
    if (count <= 1) return;
    setCount((count) => count - 1);
    setInputValue((inputValue) => +inputValue - 1 + '');
  };

  const handleClickCountPlus = () => {
    if (count > 100) return;
    setCount((count) => count + 1);
    setInputValue((inputValue) => +inputValue + 1 + '');
  };
  const handleInputChange = ({ target }: { target: HTMLElement | null }) => {
    if (!(target instanceof HTMLInputElement)) return;
    if (+target.value > 100) setInputValue('99');
    else setInputValue(target.value);
    setInputValue(target.value);
  };

  const handleCountSumbit = (e: React.FormEvent) => {
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
    <S.ProductInfo>
      <div className="product__info">
        <h3 className="producto-info__title">{title}</h3>
        <div className="producto-info__amount">
          <S.InfoTitle>판매가격</S.InfoTitle>
          <div>{amount}</div>
        </div>
        <div className="producto-info__delivery-info">
          <S.InfoTitle>배송정보</S.InfoTitle>
          <div>{delivery_info}</div>
        </div>
        <div className="producto-info__count">
          <S.InfoTitle>구매수량</S.InfoTitle>
          <form onSubmit={handleCountSumbit}>
            <button type="button" onClick={handleClickCountMinus}>
              <MinusIcon />
            </button>
            <input type="number" value={inputValue} onChange={handleInputChange} />
            <button type="button" onClick={handleClickCountPlus}>
              <PlusIcon />
            </button>
          </form>
        </div>
      </div>

      <div className="product__total-info">
        <S.InfoTitle>총 합계금액</S.InfoTitle>
        <div>{amount * count}</div>
      </div>
    </S.ProductInfo>
  );
}
