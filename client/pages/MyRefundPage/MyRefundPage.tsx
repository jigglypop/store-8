import * as S from './style';
import RefundSection from '@client/components/MyPage/RefundSection/RefundSection';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';
import NavigationSmallBar from '@client/components/MyPage/NavigationSmallBar/NavigationSmallBar';
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
      <NavigationSmallBar page="REFUND" />
      <NavigationBar page="REFUND" />
      <RefundSection />
    </S.MyRefundPage>
  );
}
