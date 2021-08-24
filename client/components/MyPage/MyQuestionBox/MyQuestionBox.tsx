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
    productInfo: { id: productId, title, productImgSrc },
  } = questionData;

  if (!title || !productImgSrc) return <></>;
  return (
    <S.MyQuestionBox>
      <div className="column-title">
        <Link to={`/product/${productId}`} className="product-link">
          <>
            <div className="wrapper-thumbnail">
              <img src={productImgSrc} />
            </div>
            <div className="container-title">
              <div className="text-title">{title}</div>
            </div>
          </>
        </Link>
      </div>
    </S.MyQuestionBox>
  );
}
