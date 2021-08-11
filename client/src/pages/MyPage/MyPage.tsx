import React, { ReactElement } from 'react';
import * as S from './style';

import OrderSection from '@src/components/MyPage/OrderSection/OrderSection';
import NavigationBar from '@src/components/MyPage/NavigationBar/NavigationBar';
interface Props {}

export default function MyPage({}: Props): ReactElement {
  return (
    <S.MyPage>
      <NavigationBar />
      <OrderSection />
    </S.MyPage>
  );
}
