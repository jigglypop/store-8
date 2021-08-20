import { ReactElement } from 'react';
import * as S from './style';

import { useRouter } from '@client/hooks/router/router';
import { useProduct } from '@client/hooks/product/product';

interface Props {}

export default function DetailInfo({}: Props): ReactElement {
  const {
    router: { params },
  } = useRouter();

  const { product, loading, error } = useProduct(+params);

  //TODO 변경 필요 -s3면 문제 없을 듯
  const IMG_SRC = 'http://localhost:8000/' + product?.detailImgSrc;

  return (
    <S.DetailInfo>
      <div className="title">상품상세정보</div>
      <div className="detail-imgs">
        <img src={IMG_SRC} alt="detail-image" />
      </div>
    </S.DetailInfo>
  );
}
