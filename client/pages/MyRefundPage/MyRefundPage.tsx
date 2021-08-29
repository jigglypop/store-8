import * as S from './style';
import RefundSection from '@client/components/MyPage/RefundSection/RefundSection';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { initMyRefund } from '@client/store/myRefund/myRefund';

export default function MyRefundPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(initMyRefund());
    };
  }, []);

  return (
    <S.MyRefundPage>
      <NavigationBar page="REFUND" />
      <RefundSection />
    </S.MyRefundPage>
  );
}
