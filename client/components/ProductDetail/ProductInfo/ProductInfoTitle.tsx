import { ReactElement } from 'react';
import * as S from './style';

import { useProduct } from '@client/hooks/product/product';

interface Props {}

export default function ProductInfoTitle({}: Props): ReactElement {
  const { product } = useProduct();
  return <S.ProductInfoTitle>{product?.title}</S.ProductInfoTitle>;
}
