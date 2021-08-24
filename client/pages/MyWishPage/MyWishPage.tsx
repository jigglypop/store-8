import * as S from './style';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';
import MyWishSection from '@client/components/MyPage/MyWishSection/MyWishSection';

interface Props {}

export default function MyWishPage() {
  return (
    <S.MyWishPage>
      <NavigationBar page="WISH" />
      <MyWishSection />
    </S.MyWishPage>
  );
}
