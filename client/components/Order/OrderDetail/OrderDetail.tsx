import { ReactElement } from 'react';
import * as S from './style';
import { CartData } from '@middle/type/cart/cart';
import OrderDetailContents from './OrderDetailContents/OrderDetailContents';

interface OrderDetailProps {
  contents: CartData[];
}

const OrderDetail = ({ contents }: OrderDetailProps): ReactElement => {
  return (
    <S.OrderDetail>
      <div className="order-detail-title">
        <p>{'주문 상세 내역'}</p>
      </div>
      <div className="order-detail-contents-container">
        {contents.map((content, index) => {
          return <OrderDetailContents key={index} content={content} />;
        })}
      </div>
    </S.OrderDetail>
  );
};

export default OrderDetail;
