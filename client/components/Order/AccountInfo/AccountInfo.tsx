import { ReactElement } from 'react';
import { kstFormatter } from '@utils/utils';
import unchecked from '@image/unchecked.png';
import Coupon from './Coupon/Coupon';

import type { CouponData } from '@middle/type/Coupon/Coupon';
import type { OrderContentMetaData } from '@client/type/CartContentMetaData';
import * as S from './style';

interface AccountProps {
  coupon?: CouponData;
  metaData: OrderContentMetaData;
}

const AccountInfo = ({ metaData, coupon }: AccountProps): ReactElement => {
  return (
    <S.AccountInfo>
      <div className="account-header">
        <p>{'결제 정보'}</p>
      </div>
      <div className="mileage-section">
        <p className="section-header">{'이번에 생기는 적립금'}</p>
        <p className="mileage-amount">{kstFormatter(metaData.totalMileage)}</p>
      </div>
      <div className="coupon-section">
        <p className="section-header">{'사용할 쿠폰'}</p>
        <p className="section-infor">{'쿠폰은 주문 한번에 최대 1개씩만 사용 가능합니다.'}</p>
        {coupon ? (
          <Coupon title={coupon.title} amount={coupon.amount} dDay={coupon.dDay}></Coupon>
        ) : (
          <></>
        )}
        <div className="coupon-button-section">
          <button className="submit-coupon">{'쿠폰 적용'}</button>
          <button className="remove-coupon">{'적용 해제'}</button>
        </div>
      </div>
      <div className="use-mileage-section">
        <p className="section-header">{'적립금 사용'}</p>
        <div className="mileage-usage-title-section">
          <p className="usable-mileage-title">{'전체 사용 가능 금액 : '}</p>
          <p className="mileage-amount">{kstFormatter(metaData.usableMileage)}</p>
        </div>

        <div className="mileage-input-container">
          <input></input>
          <img src={unchecked} />
          <p>{'전액 사용'}</p>
        </div>
      </div>
    </S.AccountInfo>
  );
};

export default AccountInfo;
