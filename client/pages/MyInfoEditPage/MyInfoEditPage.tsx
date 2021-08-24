import * as S from './style';
import OrderSection from '@client/components/MyPage/OrderSection/OrderSection';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';

interface Props {}

export default function MyInfoEditPage() {
  return (
    <S.MyInfoEditPage>
      <NavigationBar page="INFO_EDIT" />
      <OrderSection />
    </S.MyInfoEditPage>
  );
}
