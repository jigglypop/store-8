import React, { ReactElement } from 'react';
import { ContentData } from '@constants/Cart';
import * as S from './style';

interface Contents {
  content: ContentData;
}

function CartContent({ content }: Contents): ReactElement {
  console.log(content);
  return (
    <S.CartContent>
      <div></div>
    </S.CartContent>
  );
}

export default CartContent;
