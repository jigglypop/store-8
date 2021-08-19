import { ReactElement } from 'react';
import * as S from './style';
import { CartData } from '@middle/type/cart/cart';
import { DETAIL_ORDER_LIST } from '@constants/Order';
import OrderDetailContents from './OrderDetailContents/OrderDetailContents';

interface OrderDetailProps {
  contents: CartData[];
}

const OrderDetail = ({ contents }: OrderDetailProps): ReactElement => {
  return (
    <S.OrderDetail>
      <div className="order-detail-title">
        <p>{DETAIL_ORDER_LIST}</p>
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
