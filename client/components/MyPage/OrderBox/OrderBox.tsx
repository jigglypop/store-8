import { dateStringFormat } from '@client/utils/date';
import { ReactElement, useState } from 'react';
import * as S from './style';
import { Link } from '@client/utils/router';
import { IOrder } from '@middle/type/myOrder/myOrder';
import ConfirmOrderModal from '@components/MyPage/ConfirmOrderModal/ConfirmOrderModal';
import { myOrderConfirmApi } from '@client/api/myOrder';
import { createToast } from '@client/utils/createToast';
import ReviewForm from '@components/ProductDetailSection/ProductReviewList/ReviewForm/ReviewForm';

interface Props {
  result: IOrder;
}

export default function OrderBox({ result }: Props): ReactElement {
  // 과연 result가 바뀌는 것을 감지하는 방법이 없을까? 내부 state 로 관리하지 않고
  const [state, setState] = useState(result);
  const [isConfirmOrderOpenForm, setConfirmOrderOpenForm] = useState(false);
  const [isReviewOpenForm, setReviewOpenForm] = useState(false);

  const openConfirmOrderForm = () => {
    setConfirmOrderOpenForm(true);
  };

  const closeConfirmOrderForm = () => {
    setConfirmOrderOpenForm(false);
  };

  const openReviewForm = () => {
    setReviewOpenForm(true);
  };

  const closeReviewForm = () => {
    setReviewOpenForm(false);
  };

  const confirmOrderConfirm = async () => {
    if (state.isConfirmed || state.state !== '배송완료') {
      createToast('배송이 완료된 이후 구매확정을 할 수 있습니다!!', true);
    } else {
      setState({ ...state, ...(await myOrderConfirmApi(result.id)) });
      createToast('구매를 확정했습니다. 리뷰를 작성해주세요!!', false);
    }
    setConfirmOrderOpenForm(false);
  };

  // const addressConfirm = (address: AddressData) => {
  //   setTotalState({ ...totalState, addressInfo: address });
  //   setAddressOpenForm(false);
  // };

  return (
    <S.OrderBox>
      <div className="column-date">
        <div>{dateStringFormat(new Date(state.date))}</div>
        <div>{state.orderNumber}</div>
      </div>
      <Link to={`/product/${state.id}`} className="product-link">
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
        <div>{state.state}</div>
      </div>
      <div className="column-confirm">
        {!state.isConfirmed ? (
          <button onClick={openConfirmOrderForm}>구매확정</button>
        ) : (
          <button onClick={openReviewForm}>리뷰쓰기</button>
        )}
      </div>
      {isConfirmOrderOpenForm && (
        <ConfirmOrderModal closeForm={closeConfirmOrderForm} confirm={confirmOrderConfirm} />
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
