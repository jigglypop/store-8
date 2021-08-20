import { ReactElement } from 'react';
import * as S from './style';
import { CartData } from '@middle/type/cart/cart';
import { kstFormatter, getMileage } from '@utils/utils';

interface OrderDetailContentsProps {
  content: CartData;
}

const OrderDetailContents = ({ content }: OrderDetailContentsProps): ReactElement => {
  return (
    <S.OrderDetailContents>
      <img src={content.imgSrc} />
      <div className="contents-detail-container">
        <p className="contents-detail-title">{content.title}</p>
        {content.option.length !== 0 ? (
          <p className="contents-detail-subtitle">{content.option}</p>
        ) : (
          <></>
        )}
        <div className="contents-detail-row">
          <p className="contents-detail-amount">{kstFormatter(content.amount * content.count)}</p>
          <p className="contents-detail-count">{'( 주문 수량 : ' + content.count + ' )'}</p>
        </div>
        <div className="contents-detail-row">
          <p className="contents-detail-mileage-title">{'적립금 : '}</p>
          <p className="contents-detail-mileage-amount">
            {'+' + kstFormatter(getMileage(content.amount * content.count))}
          </p>
        </div>
      </div>
    </S.OrderDetailContents>
  );
};

export default OrderDetailContents;
