import * as S from './style';
import OrderSection from '@client/components/MyPage/OrderSection/OrderSection';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';

interface Props {}

export default function MyGoodsQAPage() {
  return (
    <S.MyGoodsQAPage>
      <NavigationBar page="GOODS_QA" />
      <OrderSection />
    </S.MyGoodsQAPage>
  );
}
