import Wish from '@client/components/Wish/Wish';
import { dot } from '@client/utils/dot';
import { Link } from '@client/utils/router';
import { IProduct } from '@middle/type/product/product';
import { ReactElement } from 'react';
import * as S from './style';

interface Props {
  result: IProduct;
}

export default function ProductBox({ result }: Props): ReactElement {
  return (
    <S.ProductBox>
      <div className="column-button">
        <Wish productId={result.id.toString()} name={result.title} />
      </div>
      <div className="column-title">
        <Link to={`/product/${result.id}`} className="product-link">
          <>
            <div className="wrapper-thumbnail">
              <img src={result.productImgSrc} />
            </div>
            <div className="container-title">
              <div className="text-title">{result.title}</div>
            </div>
          </>
        </Link>
      </div>
      <div className="column-price">
        <div>{dot(result.amount)} 원</div>
      </div>
    </S.ProductBox>
  );
}
