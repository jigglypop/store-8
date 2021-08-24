import * as S from './style';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';
import MyReviewSection from '@client/components/MyPage/MyReviewSection/MyReviewSection';

interface Props {}

export default function MyGoodsReviewPage() {
  return (
    <S.MyGoodsReviewPage>
      <NavigationBar page="GOODS_REVIEW" />
      <MyReviewSection />
    </S.MyGoodsReviewPage>
  );
}
