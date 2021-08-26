import { ReactElement, useState } from 'react';
import { kstFormatter } from '@utils/utils';
import unchecked from '@image/unchecked.png';
import Coupon from './Coupon/Coupon';
import {
  COUPON_INFO_TEXT,
  NOW_GEN_MILEAGE,
  USE_COUPON,
  USE_MILEAGE,
  TOTAL_USABLE_MILEAGE,
} from '@constants/Order';

import type { CouponData } from '@middle/type/coupon/coupon';
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
  const [mileageString, setMileageString] = useState('0원');
  return (
    <S.AccountInfo>
      <div className="account-header">
        <p>{'결제 정보'}</p>
      </div>
      <div className="mileage-section">
        <p className="section-header">{NOW_GEN_MILEAGE}</p>
        <p className="mileage-amount">{kstFormatter(metaData.totalMileage)}</p>
      </div>
      <div className="coupon-section">
        <p className="section-header">{USE_COUPON}</p>
        <p className="section-infor">{COUPON_INFO_TEXT}</p>
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
        <p className="section-header">{USE_MILEAGE}</p>
        <div className="mileage-usage-title-section">
          <p className="usable-mileage-title">{TOTAL_USABLE_MILEAGE}</p>
          <p className="mileage-amount">{kstFormatter(metaData.usableMileage)}</p>
        </div>

        <div className="mileage-input-container">
          <input
            value={mileageString}
            onChange={(e) => {
              const mileageStr = e.target.value;
              // 입력을 숫자만 받게 함
              let regex = /[^0-9]/g;
              let result: string = mileageStr.replace(regex, '');
              let numResult: number = Number(result);

              if (numResult > metaData.usableMileage) {
                setMileageString(kstFormatter(metaData.usableMileage));
                useMileage(metaData.usableMileage);
              } else {
                setMileageString(kstFormatter(numResult));
                useMileage(numResult);
              }
            }}
          />
          <div className="use-all-container">
            <img
              onClick={(e) => {
                setMileageString(kstFormatter(metaData.usableMileage));
                useMileage(metaData.usableMileage);
              }}
              src={unchecked}
            />
            <p
              onClick={(e) => {
                setMileageString(kstFormatter(metaData.usableMileage));
                useMileage(metaData.usableMileage);
              }}
            >
              {'전액 사용'}
            </p>
          </div>
        </div>
      </div>
    </S.AccountInfo>
  );
};

export default AccountInfo;
