import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  amount: number;
  delivery_info: string;
}

export default function ProductInfo({ title, amount, delivery_info }: Props): ReactElement {
  const [count, setCount] = useState(1);
  const [inputValue, setInputValue] = useState(count);

  const handleCountClick = (e: React.MouseEvent) => {
    const target = e.target;
    if (!(target instanceof HTMLButtonElement)) return;
    const isPlus = target.textContent === '+';
    if (isPlus) {
      setCount((count) => count + 1);
      setInputValue((inputValue) => inputValue + 1);
    } else {
      if (count <= 1) return;
      setCount((count) => count - 1);
      setInputValue((inputValue) => inputValue - 1);
    }
  };
  const handleInputChange = ({ target }: { target: HTMLElement | null }) => {
    if (!(target instanceof HTMLInputElement)) return;
    setInputValue(+target.value);
  };

  const handleCountSumbit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue) setCount(+inputValue);
    else setInputValue(count);
  };
  return (
    <StyledProductInfo>
      <div className="product__info">
        <h3 className="producto-info__title">{title}</h3>
        <div>
          <StyledInfoTitle>판매가격</StyledInfoTitle>
          <div>{amount}</div>
        </div>
        <div>
          <StyledInfoTitle>배송정보</StyledInfoTitle>
          <div>{delivery_info}</div>
        </div>
        <div>
          <StyledInfoTitle>구매수량</StyledInfoTitle>
          <form onSubmit={handleCountSumbit}>
            <button type="button" onClick={handleCountClick}>
              -
            </button>
            <input type="number" value={inputValue} onChange={handleInputChange} />
            <button type="button" onClick={handleCountClick}>
              +
            </button>
          </form>
        </div>
      </div>

      <div className="product__total-info">
        <StyledInfoTitle>총 합계금액</StyledInfoTitle>
        <div>{amount * count}</div>
      </div>
    </StyledProductInfo>
  );
}

const StyledProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  .product__info {
    & > div {
      display: flex;
    }
  }

  .product__total-info {
    display: flex;
  }
`;

export const StyledInfoTitle = styled.div`
  color: #bbbbbb;
`;
