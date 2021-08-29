import * as S from './style';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';
import MyQuestionSection from '@client/components/MyPage/MyQuestionSection/MyQuestionSection';
import NavigationSmallBar from '@client/components/MyPage/NavigationSmallBar/NavigationSmallBar';

interface Props {}

export default function MyGoodsQAPage() {
  return (
    <S.MyGoodsQAPage>
      <NavigationSmallBar page="GOODS_QA" />
      <NavigationBar page="GOODS_QA" />
      <MyQuestionSection />
    </S.MyGoodsQAPage>
  );
}
