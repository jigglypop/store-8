import React, { ReactElement } from 'react';
import CartContent from '@components/Cart/Content';
import * as S from './style';
import { ContentData } from '@constants/Cart';

interface ContentDataList {
  contents: ContentData[];
}

function CartContentsContainer({ contents }: ContentDataList): ReactElement {
  return (
    <S.CartContainer>
      {contents.map((content: ContentData, index: number) => (
        <CartContent content={content} key={index} />
      ))}
    </S.CartContainer>
  );
}

export default CartContentsContainer;
