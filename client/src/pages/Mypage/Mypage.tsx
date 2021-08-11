import React, { ReactElement } from 'react';
import * as S from './style';

import OrderSection from '@src/components/MyPage/OrderSection/OrderSection';

interface Props {}

export default function Mypage({}: Props): ReactElement {
  return (
    <S.Mypage>
      <OrderSection />
    </S.Mypage>
  );
}
