import * as S from './style';
import AddressSection from '@components/MyPage/AddressSection/AddressSection';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';
import NavigationSmallBar from '@client/components/MyPage/NavigationSmallBar/NavigationSmallBar';

export default function MyAddressPage() {
  return (
    <S.MyAddressPage>
      <NavigationSmallBar page="ADDRESS" />
      <NavigationBar page="ADDRESS" />
      <AddressSection />
    </S.MyAddressPage>
  );
}
