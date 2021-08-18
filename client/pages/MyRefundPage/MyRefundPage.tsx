import * as S from './style';
import RefundSection from '@client/components/MyPage/RefundSection/RefundSection';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';

interface Props {}

export default function MyRefundPage() {
  return (
    <S.MyRefundPage>
      <NavigationBar page="REFUND" />
      <RefundSection />
    </S.MyRefundPage>
  );
}
