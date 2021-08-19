import * as S from './style';
import OrderSection from '@client/components/MyPage/OrderSection/OrderSection';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';

interface Props {}

export default function MyGoodsReviewPage() {
  return (
    <S.MyGoodsReviewPage>
      <NavigationBar page="GOODS_REVIEW" />
      <OrderSection />
    </S.MyGoodsReviewPage>
  );
}
