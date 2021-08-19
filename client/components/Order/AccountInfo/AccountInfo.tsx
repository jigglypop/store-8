import { ReactElement, useState } from 'react';
import { kstFormatter } from '@utils/utils';
import unchecked from '@image/unchecked.png';
import Coupon from './Coupon/Coupon';

import type { CouponData } from '@middle/type/Coupon/coupon';
import type { OrderContentMetaData } from '@client/type/CartContentMetaData';
import * as S from './style';

interface AccountProps {
  openForm: () => void;
  initCoupon: () => void;
  useMileage: (amount: number) => void;
  coupon: CouponData;
  metaData: OrderContentMetaData;
}

const AccountInfo = ({
  openForm,
  useMileage,
  initCoupon,
  metaData,
  coupon,
}: AccountProps): ReactElement => {
  const [mileageString, setMileageString] = useState('0');
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
        {coupon.title.length !== 0 ? (
          <Coupon title={coupon.title} amount={coupon.amount} dDay={coupon.dDay}></Coupon>
        ) : (
          <></>
        )}
        <div className="coupon-button-section">
          <button onClick={openForm} className="submit-coupon">
            {'쿠폰 적용'}
          </button>
          <button onClick={initCoupon} className="remove-coupon">
            {'적용 해제'}
          </button>
        </div>
      </div>
      <div className="use-mileage-section">
        <p className="section-header">{'적립금 사용'}</p>
        <div className="mileage-usage-title-section">
          <p className="usable-mileage-title">{'전체 사용 가능 금액 : '}</p>
          <p className="mileage-amount">{kstFormatter(metaData.usableMileage)}</p>
        </div>

        <div className="mileage-input-container">
          <input
            value={mileageString}
            onChange={(e) => {
              const mileageStr = e.target.value;
              if (+mileageStr > metaData.usableMileage) {
                e.target.value = '' + metaData.usableMileage;
                setMileageString('' + metaData.usableMileage);
                useMileage(metaData.usableMileage);
              } else {
                setMileageString('' + Number(mileageStr));
                useMileage(+mileageStr);
              }
            }}
          />
          <img
            onClick={(e) => {
              setMileageString('' + metaData.usableMileage);
              useMileage(metaData.usableMileage);
            }}
            src={unchecked}
          />
          <p
            onClick={(e) => {
              setMileageString('' + metaData.usableMileage);
              useMileage(metaData.usableMileage);
            }}
          >
            {'전액 사용'}
          </p>
        </div>
      </div>
    </S.AccountInfo>
  );
};

export default AccountInfo;
