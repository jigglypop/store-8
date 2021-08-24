import { RootState } from '@client/store';
import { useSelector } from 'react-redux';
import { getShipmentAmount } from '@client/utils/utils';
import OrderDetail from '../OrderDetail/OrderDetail';
import OrderPlace from './OrderPlace/OrderPlace';
import * as S from './style';

const OrderFinishContents = () => {
  const { cart } = useSelector((state: RootState) => state.order);
  const { order } = useSelector((state: RootState) => state.finish);

  const calcTotalAmount = () => {
    let result = 0;
    cart.forEach((element) => {
      result += element.amount * element.count;
    });
    return result - order.useCouponAmount - order.useMileageAmount + getShipmentAmount(result);
  };

  return (
    <S.OrderFinishContents>
      <div className="goto-main">
        <p>{'잠시후 메인화면으로 이동합니다'}</p>
      </div>
      <div className="contents-container">
        <OrderDetail contents={cart} />
        <OrderPlace contents={order} totalAmount={calcTotalAmount()} />
      </div>
    </S.OrderFinishContents>
  );
};

export default OrderFinishContents;
