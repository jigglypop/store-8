import React, { ReactElement } from 'react';
import * as S from './style';
import { Link } from '@client/utils/router';

import { IMyQuestion } from '@middle/type/question/question';

interface Props {
  questionData: IMyQuestion;
}

export default function MyQuestionBox({ questionData }: Props): ReactElement {
  const {
    id,
    title,
    date,
    productInfo: { id: productId, title: productTitle, productImgSrc },
  } = questionData;

  if (!productTitle || !productImgSrc) return <></>;
  return (
    <S.MyQuestionBox>
      <div className="column-title">
        <Link to={`/product/${productId}`} className="product-link">
          <div className="wrapper-thumbnail">
            <img src={productImgSrc} />
          </div>
          <div className="wrapper-title-thumbnail">
            <div>{productTitle}</div>
          </div>
        </Link>
      </div>
      <div className="column-title">
        <div>{title}</div>
      </div>
      <div className="column-date">
        <div>{date}</div>
      </div>
    </S.MyQuestionBox>
  );
}
