import * as S from './style';
import AddressSection from '@components/MyPage/AddressSection/AddressSection';
import NavigationBar from '@client/components/MyPage/NavigationBar/NavigationBar';

export default function MyAddressPage() {
  return (
    <S.MyAddressPage>
      <NavigationBar page="ADDRESS" />
      <AddressSection />
    </S.MyAddressPage>
  );
}
