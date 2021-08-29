import { dateStringFormat } from '@client/utils/date';
import { ReactElement, useState } from 'react';
import * as S from './style';
import { Link } from '@client/utils/router';
import { IOrder } from '@middle/type/myOrder/myOrder';
import ConfirmCheckModal from '@components/MyPage/ConfirmOrderModal/ConfirmOrderModal';
import { myOrderConfirmApi } from '@client/api/myOrder';
import { myRefundCreateApi } from '@client/api/myRefund';
import { createToast } from '@client/utils/createToast';
import ReviewForm from '@components/ProductDetailSection/ProductReviewList/ReviewForm/ReviewForm';
import * as c from '@client/constants/Order';
import cache from '@client/utils/cache';

interface Props {
  result: IOrder;
}

export default function OrderBox({ result }: Props): ReactElement {
  // 과연 result가 바뀌는 것을 감지하는 방법이 없을까? 내부 state 로 관리하지 않고
  const [state, setState] = useState(result);
  const [isConfirmOrderOpenForm, setConfirmOrderOpenForm] = useState(false);
  const [isConfirmRefundOpenForm, setConfirmRefundOpenForm] = useState(false);
  const [isReviewOpenForm, setReviewOpenForm] = useState(false);

  const getStateByDate = (_state: IOrder): string => {
    const now = new Date();
    const delta = (now.getTime() - new Date(_state.date).getTime()) / 1000;
    if (!_state.isConfirmed) {
      if (!_state.refundId) {
        if (delta >= 0 && delta < 20) return c.BEFORE_DELIVERY;
        else if (delta >= 20 && delta < 40) return c.IN_DELIVERY;
        return c.FINISH_DELIVERY;
      } else {
        return c.REQUEST_REFUND;
      }
    } else {
      if (!_state.reviewId) return c.AFTER_CONFIRM;
      else return c.FINISH_REVIEW;
    }
  };

  const openConfirmOrderForm = () => {
    setConfirmOrderOpenForm(true);
  };

  const closeConfirmOrderForm = () => {
    setConfirmOrderOpenForm(false);
  };

  const openConfirmRefundForm = () => {
    setConfirmRefundOpenForm(true);
  };

  const closeConfirmRefundForm = () => {
    setConfirmRefundOpenForm(false);
  };

  const openReviewForm = () => {
    setReviewOpenForm(true);
  };

  const closeReviewForm = () => {
    setReviewOpenForm(false);
  };

  const confirmOrderConfirm = async () => {
    if (state.isConfirmed) {
      createToast('이미 구매확정된 주문입니다.!!', true);
    } else if (getStateByDate(state) !== c.FINISH_DELIVERY) {
      createToast('배송이 완료된 이후 구매확정을 할 수 있습니다!!', true);
    } else {
      const order = await myOrderConfirmApi({ token: cache.get('token'), orderId: result.id });

      if (order.isConfirmed) {
        setState({
          ...state,
          ...order,
        });
        createToast('구매를 확정했습니다. 리뷰를 작성해주세요!!', false);
      } else {
        createToast('구매확정에 실패했습니다!', true);
      }
    }
    setConfirmOrderOpenForm(false);
  };

  const requestRefundConfirm = async () => {
    if (state.isConfirmed) {
      createToast('이미 구매확정된 주문입니다.!!', true);
    } else if (getStateByDate(state) !== c.FINISH_DELIVERY) {
      createToast('배송이 완료된 이후 환불요청을 할 수 있습니다!!', true);
    } else {
      const { refund, order } = await myRefundCreateApi({
        token: cache.get('token'),
        orderId: result.id,
      });

      if (order.refundId) {
        setState({ ...state, ...order });
        createToast('환불을 요청했습니다.', false);
      } else {
        createToast('이미 환불 요청된 주문입니다.', true);
      }
    }
    setConfirmRefundOpenForm(false);
  };

  const buttonByState = (_state: IOrder) => {
    if (!_state.isConfirmed) {
      if (!_state.refundId) {
        return (
          <>
            <button onClick={openConfirmOrderForm} className="button-confirm-order">
              구매확정
            </button>
            <button onClick={openConfirmRefundForm} className="button-confirm-order">
              환불요청
            </button>
          </>
        );
      } else {
        return <button className="button-disabled">환불요청완료</button>;
      }
    } else {
      if (!_state.reviewId) {
        return (
          <button onClick={openReviewForm} className="button-write-review">
            리뷰쓰기
          </button>
        );
      } else {
        return (
          <button disabled className="button-disabled">
            리뷰완료
          </button>
        );
      }
    }
  };

  return (
    <S.OrderBox>
      <div className="column-date">
        <div>{dateStringFormat(new Date(state.date))}</div>
        <div>{state.orderNumber}</div>
      </div>
      <Link to={`/product/${state.productId}`} className="product-link">
        <div className="column-title">
          <div className="wrapper-thumbnail">
            <img src={state.productImgSrc} />
          </div>
          <div className="container-title">
            <div className="text-title">{state.title}</div>
            {state.option ? <div className="text-option">{state.option}</div> : ''}
          </div>
        </div>
      </Link>
      <div className="column-product">
        <div>
          {state.productAmount}원 / <span>{state.productCount}개</span>
        </div>
      </div>
      <div className="column-status">
        <div>{getStateByDate(state)}</div>
      </div>
      <div className="column-confirm">{buttonByState(state)}</div>
      {isConfirmOrderOpenForm && (
        <ConfirmCheckModal
          text="구매를 확정하시겠습니까?"
          closeForm={closeConfirmOrderForm}
          confirm={confirmOrderConfirm}
        />
      )}
      {isConfirmRefundOpenForm && (
        <ConfirmCheckModal
          text="반품/환불 요청하시겠습니까?"
          closeForm={closeConfirmRefundForm}
          confirm={requestRefundConfirm}
        />
      )}
      {isReviewOpenForm && (
        <ReviewForm
          closeReviewForm={closeReviewForm}
          productInfo={{
            id: state.productId,
            productImgSrc: state.productImgSrc,
            title: state.title,
          }}
          orderId={state.id}
        />
      )}
    </S.OrderBox>
  );
}
