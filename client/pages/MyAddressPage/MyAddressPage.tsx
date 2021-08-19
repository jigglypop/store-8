import * as S from './style';
import OrderSection from '@client/components/MyPage/OrderSection/OrderSection';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';

interface Props {}

export default function MyAddressPage() {
  return (
    <S.MyAddressPage>
      <NavigationBar page="ADDRESS" />
      <OrderSection />
    </S.MyAddressPage>
  );
}
