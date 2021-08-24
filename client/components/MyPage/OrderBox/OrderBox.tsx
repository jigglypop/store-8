import { dateStringFormat } from '@client/utils/date';
import React, { ReactElement } from 'react';
import * as S from './style';
import { Link } from '@client/utils/router';
import { IOrder } from '@middle/type/myOrder/myOrder';

interface Props {
  result: IOrder;
}

export default function OrderBox({ result }: Props): ReactElement {
  return (
    <S.OrderBox>
      <div className="column-date">
        <div>{dateStringFormat(new Date(result.date))}</div>
        <div>{result.orderNumber}</div>
      </div>
      <Link to={`/product/${result.id}`} className="product-link">
        <div className="column-title">
          <div className="wrapper-thumbnail">
            <img src={result.productImgSrc} />
          </div>
          <div className="container-title">
            <div className="text-title">{result.title}</div>
            {result.option ? <div className="text-option">{result.option}</div> : ''}
          </div>
        </div>
      </Link>
      <div className="column-product">
        <div>
          {result.productAmount}원 / <span>{result.productCount}개</span>
        </div>
      </div>
      <div className="column-status">
        <div>{result.state}</div>
      </div>
      <div className="column-confirm">
        <button>구매확정</button>
        <button>리뷰쓰기</button>
      </div>
    </S.OrderBox>
  );
}
