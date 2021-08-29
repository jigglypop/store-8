import * as S from './style';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';
import MyReviewSection from '@client/components/MyPage/MyReviewSection/MyReviewSection';
import NavigationSmallBar from '@client/components/MyPage/NavigationSmallBar/NavigationSmallBar';
interface Props {}

export default function MyGoodsReviewPage() {
  return (
    <S.MyGoodsReviewPage>
      <NavigationSmallBar page="GOODS_REVIEW" />
      <NavigationBar page="GOODS_REVIEW" />
      <MyReviewSection />
    </S.MyGoodsReviewPage>
  );
}
