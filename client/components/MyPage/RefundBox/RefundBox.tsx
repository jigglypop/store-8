import { dateStringFormat } from '@client/utils/date';
import { ReactElement } from 'react';
import * as S from './style';
import { IRefund } from '@middle/type/myRefund/myRefund';
import { createToast } from '@client/utils/createToast';

interface Props {
  result: IRefund;
}

export default function RefundBox({ result }: Props): ReactElement {
  const notYet = (e: React.MouseEvent) => {
    const { target } = e;
    if (!(target instanceof HTMLButtonElement)) return;

    createToast('구현 중입니다. 기다려주세요', true);
  };
  return (
    <S.RefundBox>
      <div className="column-date">
        <div>{dateStringFormat(new Date(result.date))}</div>
        <div>{result.orderNumber}</div>
      </div>
      <div className="column-title">
        <div className="wrapper-thumbnail">
          <img src={result.productImgSrc} />
        </div>
        <div className="container-title">
          <div className="text-title">{result.title}</div>
          {result.option ? <div className="text-option">{result.option}</div> : ''}
        </div>
      </div>
      <div className="column-product">
        <div>
          {result.productAmount}원 / <span>{result.productCount}개</span>
        </div>
      </div>
      <div className="column-status">
        <div>{result.state}</div>
      </div>
      <div className="column-confirm" onClick={notYet}>
        <button>취소</button>
        <button>환불확정</button>
      </div>
    </S.RefundBox>
  );
}
