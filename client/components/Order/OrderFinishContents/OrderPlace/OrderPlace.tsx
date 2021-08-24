import * as S from './style';
import { ProceedOrderProps } from '@middle/type/product/order';
import { kstFormatter } from '@utils/utils';

interface Address {
  contents: ProceedOrderProps;
  totalAmount: number;
}

const OrderPlace = ({ contents, totalAmount }: Address) => {
  return (
    <S.OrderPlace>
      <div className="order-detail-title">
        <p>{'결제 정보'}</p>
      </div>
      <div className="order-detail-contents">
        <div className="information-row">
          <p className="information-title"> {'배송지'}</p>
          <p className="information-text">
            {contents.addressInfo.name + ' ( ' + contents.addressInfo.email + ' ) '}
          </p>
        </div>
        <div className="information-row">
          <p className="information-title"> {'연락처'}</p>
          <p className="information-text">{contents.addressInfo.call}</p>
        </div>
        <div className="information-row">
          <p className="information-title"> {'배송지'}</p>
          <p className="information-text">
            {contents.addressInfo.address + ' ( ' + contents.addressInfo.extraAddress + ' ) '}
          </p>
        </div>
        <div className="information-row">
          <p className="information-title"> {'총 결제금액'}</p>
          <p className="information-text">{kstFormatter(totalAmount)}</p>
        </div>
      </div>
    </S.OrderPlace>
  );
};

export default OrderPlace;
