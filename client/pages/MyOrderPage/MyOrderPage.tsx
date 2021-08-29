import * as S from './style';
import OrderSection from '@client/components/MyPage/OrderSection/OrderSection';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initMyOrder } from '@client/store/myOrder/myOrder';

export default function MyOrderPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(initMyOrder());
    };
  }, []);

  return (
    <S.MyOrderPage>
      <NavigationBar page="ORDER" />
      <OrderSection />
    </S.MyOrderPage>
  );
}
