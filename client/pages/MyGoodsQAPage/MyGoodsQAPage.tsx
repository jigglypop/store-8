import * as S from './style';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';
import MyQuestionSection from '@client/components/MyPage/MyQuestionSection/MyQuestionSection';

interface Props {}

export default function MyGoodsQAPage() {
  return (
    <S.MyGoodsQAPage>
      <NavigationBar page="GOODS_QA" />
      <MyQuestionSection />
    </S.MyGoodsQAPage>
  );
}
