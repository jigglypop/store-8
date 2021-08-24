import * as S from './style';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';
import MyWishSection from '@client/components/MyPage/MyWishSection/MyWishSection';
import NavigationSmallBar from '@client/components/MyPage/NavigationSmallBar/NavigationSmallBar';

export default function MyWishPage() {
  return (
    <S.MyWishPage>
      <NavigationSmallBar page="WISH" />
      <NavigationBar page="WISH" />
      <MyWishSection />
    </S.MyWishPage>
  );
}
