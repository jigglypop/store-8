import { dateStringFormat } from '@client/utils/date';
import { ReactElement } from 'react';
import * as S from './style';
import { IRefund } from '@middle/type/myRefund/myRefund';
import { createToast } from '@client/utils/createToast';
import { useState, useEffect } from 'react';
import ConfirmCheckModal from '@components/MyPage/ConfirmOrderModal/ConfirmOrderModal';
import * as c from '@constants/Refund';
import { useMyRefund } from '@client/hooks/myRefund/myRefund';
import cache from '@client/utils/cache';
interface Props {
  result: IRefund;
  cancelFn: Function;
  confirmFn: Function;
}

export default function RefundBox({ result, cancelFn, confirmFn }: Props): ReactElement {
  const [state, setState] = useState(result);
  const [isCancelRefundForm, setCancelRefundForm] = useState(false);
  const [isConfirmRefundForm, setConfirmRefundForm] = useState(false);

  useEffect(() => {
    setState(result);
  }, [result]);

  const getStateByDate = (_state: IRefund): string => {
    const now = new Date();
    const delta = (now.getTime() - new Date(_state.date).getTime()) / 1000;

    if (_state.isConfirmed) return c.FINISH_REFUND;

    if (delta >= 0 && delta < 20) return c.WAIT_ACCEPT_REFUND;
    else if (delta >= 20 && delta < 40) return c.BEFORE_GET_REFUND_MONEY;
    return c.AFTER_GET_REFUND_MONEY;
  };

  const openCancelRefundForm = () => {
    setCancelRefundForm(true);
  };

  const closeCancelRefundForm = () => {
    setCancelRefundForm(false);
  };

  const requestCancelRefund = async () => {
    const s = getStateByDate(state);
    if (state.isConfirmed) {
      createToast('취소불가. 이미 환불처리가 확정된 내역입니다.', true);
    } else if (s === c.WAIT_ACCEPT_REFUND) {
      cancelFn(cache.get('token'), state.id);
      createToast('성공적으로 취소했습니다.');
    } else if (s === c.BEFORE_GET_REFUND_MONEY) {
      createToast('취소불가. 반송된 물품을 확인중에 있습니다.', true);
    } else if (s === c.AFTER_GET_REFUND_MONEY) {
      createToast('취소불가. 이미 환불처리된 내역입니다.', true);
    }

    closeCancelRefundForm();
  };

  const openConfirmRefundForm = () => {
    setConfirmRefundForm(true);
  };

  const closeConfirmRefundForm = () => {
    setConfirmRefundForm(false);
  };

  const requestConfirmRefund = async () => {
    const s = getStateByDate(state);
    if (state.isConfirmed) {
      createToast('확정불가. 이미 환불처리가 확정된 내역입니다.', true);
    } else if (s === c.WAIT_ACCEPT_REFUND) {
      createToast('확정불가. 환불처리 승인 대기중입니다.', true);
    } else if (s === c.BEFORE_GET_REFUND_MONEY) {
      createToast('확정불가. 반송된 물품을 확인중에 있습니다.', true);
    } else if (s === c.AFTER_GET_REFUND_MONEY) {
      confirmFn(cache.get('token'), state.id);
      createToast('성공적으로 환불을 받으셨습니다.');
    }

    closeConfirmRefundForm();
  };

  const buttonByState = (_state: IRefund) => {
    if (!_state.isConfirmed) {
      return (
        <>
          <button onClick={openCancelRefundForm} className="button-confirm-order">
            취소
          </button>
          <button onClick={openConfirmRefundForm} className="button-confirm-order">
            환불확정
          </button>
        </>
      );
    } else {
      return <button className="button-disabled">환불처리완료</button>;
    }
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
        <div>{getStateByDate(state)}</div>
      </div>
      <div className="column-confirm">{buttonByState(state)}</div>
      {isCancelRefundForm && (
        <ConfirmCheckModal
          text="환불을 취소하시겠습니까?"
          closeForm={closeCancelRefundForm}
          confirm={requestCancelRefund}
        />
      )}
      {isConfirmRefundForm && (
        <ConfirmCheckModal
          text="환불처리를 확정하시겠습니다?"
          closeForm={closeConfirmRefundForm}
          confirm={requestConfirmRefund}
        />
      )}
    </S.RefundBox>
  );
}
