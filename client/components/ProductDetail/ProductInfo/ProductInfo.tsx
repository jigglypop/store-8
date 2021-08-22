import React, { ReactElement, useState } from 'react';
import * as S from './style';

import PlusIcon from '@image/icon/plusIcon.svg';
import MinusIcon from '@image/icon/minusIcon.svg';
import {
  DELIVERY_INFO_FEE,
  DELIVERY_INFO_TIMELIMIT,
  TITLE_ORIGIN_AMOUNT,
  TITLE_SALE_AMOUNT,
  TITLE_DELIVERY,
  TITLE_BUY_AMOUNT,
  TITLE_TOTAL_AMOUNT,
} from '@client/constants/productDetail/productDetailInfo/productDetailInfo';

interface Props {
  title: string;
  originalAmount?: number;
  amount: number;
}

export default function ProductInfo({ title, originalAmount, amount }: Props): ReactElement {
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
        {originalAmount && (
          <div className="product-info__origin-amount">
            <S.InfoTitle>{TITLE_ORIGIN_AMOUNT}</S.InfoTitle>
            <div className="stroke">{kstFormatter(originalAmount, true)}</div>
          </div>
        )}
        <div className="producto-info__amount">
          <S.InfoTitle>{TITLE_SALE_AMOUNT}</S.InfoTitle>
          <div className="price">{kstFormatter(amount, true)}</div>
        </div>
        <div className="producto-info__delivery-info">
          <S.InfoTitle>{TITLE_DELIVERY}</S.InfoTitle>
          <div>
            <div className="delivery-info-fee">{DELIVERY_INFO_FEE}</div>
            <div>{DELIVERY_INFO_TIMELIMIT}</div>
          </div>
        </div>
        <div className="producto-info__count">
          <S.InfoTitle>{TITLE_BUY_AMOUNT}</S.InfoTitle>
          <form onSubmit={handleCountSumbit}>
            <button type="button" className="count-btn" onClick={handleClickCountMinus}>
              <MinusIcon />
            </button>
            <input type="number" value={inputValue} onChange={handleInputChange} />
            <button type="button" className="count-btn" onClick={handleClickCountPlus}>
              <PlusIcon />
            </button>
          </form>
        </div>
      </div>
      <div className="product__total-info">
        <S.InfoTitle>{TITLE_TOTAL_AMOUNT}</S.InfoTitle>
        <div className="total-price">{kstFormatter(amount * count, true)}</div>
      </div>
    </S.ProductInfo>
  );
}

//여기 utils import에서 에러 발생해서 임시로 가져다 놨습니다.
function kstFormatter(amount: number | void, suffix: boolean = true) {
  if (!amount) return;
  if (suffix) {
    return amount.toLocaleString() + '원';
  } else {
    return amount.toLocaleString();
  }
}
