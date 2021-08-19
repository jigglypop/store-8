import * as S from './style';
import OrderSection from '@client/components/MyPage/OrderSection/OrderSection';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';

interface Props {}

export default function MyWishPage() {
  return (
    <S.MyWishPage>
      <NavigationBar page="WISH" />
      <OrderSection />
    </S.MyWishPage>
  );
}
