import { dateStringFormat } from '@client/utils/date';
import { ReactElement, useState } from 'react';
import * as S from './style';
import { Link } from '@client/utils/router';
import { IOrder } from '@middle/type/myOrder/myOrder';
import request from '@client/api/utils/request';
import ConfirmOrderModal from '@components/MyPage/ConfirmOrderModal/ConfirmOrderModal';
interface Props {
  result: IOrder;
}

export default function OrderBox({ result }: Props): ReactElement {
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

  const confirmOrderConfirm = () => {
    console.log('모달 닫기');
    setConfirmOrderOpenForm(false);
  };

  // const addressConfirm = (address: AddressData) => {
  //   setTotalState({ ...totalState, addressInfo: address });
  //   setAddressOpenForm(false);
  // };

  return (
    <S.OrderBox>
      <div className="column-date">
        <div>{dateStringFormat(new Date(result.date))}</div>
        <div>{result.orderNumber}</div>
      </div>
      <Link to={`/product/${result.id}`} className="product-link">
        <div className="column-title">
          <div className="wrapper-thumbnail">
            <img src={result.productImgSrc} />
          </div>
          <div className="container-title">
            <div className="text-title">{result.title}</div>
            {result.option ? <div className="text-option">{result.option}</div> : ''}
          </div>
        </div>
      </Link>
      <div className="column-product">
        <div>
          {result.productAmount}원 / <span>{result.productCount}개</span>
        </div>
      </div>
      <div className="column-status">
        <div>{result.state}</div>
      </div>
      <div className="column-confirm">
        {!result.isConfirmed ? (
          <button onClick={openConfirmOrderForm}>구매확정</button>
        ) : (
          <button onClick={openReviewForm}>리뷰쓰기</button>
        )}
      </div>
      {isConfirmOrderOpenForm && (
        <ConfirmOrderModal closeForm={closeConfirmOrderForm} confirm={confirmOrderConfirm} />
      )}
      {/* {isReviewOpenForm && <ReviewModal closeForm={closeReviewForm} confirm={closeReviewForm} />} */}
    </S.OrderBox>
  );
}
