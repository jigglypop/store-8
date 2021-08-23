import { ReactElement } from 'react';
import * as S from './style';

import Intro from '@components/MyPage/Intro/Intro';
import SearchBar from '@components/MyPage/SearchBar/SearchBar';
import OrderResultContainer from '@components/MyPage/OrderResultContainer/OrderResultContainer';

interface Props {}

export default function OrderSection({}: Props): ReactElement {
  return (
    <S.OrderSection>
      <Intro />
      <SearchBar page="order" title="주문목록/배송조회" />
      <OrderResultContainer />
    </S.OrderSection>
  );
}
