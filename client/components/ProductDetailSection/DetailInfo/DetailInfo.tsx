import { ReactElement } from 'react';
import * as S from './style';

import { useProduct } from '@client/hooks/product/product';
import { getS3Url } from '@client/utils/getS3Url';

interface Props {}

export default function DetailInfo({}: Props): ReactElement {
  const { product, loading, error } = useProduct();

  //TODO 변경 필요 -s3면 문제 없을 듯
  const IMG_SRC = product?.detailImgSrc || '';

  return (
    <S.DetailInfo>
      <div className="title">상품상세정보</div>
      <div className="detail-imgs">
        <img src={IMG_SRC} alt="detail-image" />
      </div>
    </S.DetailInfo>
  );
}
