import { ReactElement } from 'react';
import { kstFormatter, getCouponColor } from '@utils/utils';

import * as S from './style';

interface CouponData {
  title: string;
  amount: number;
  dDay: string;
}

const Coupon = ({ title, amount, dDay }: CouponData): ReactElement => {
  return (
    <S.Coupon>
      <div className={'coupon-' + getCouponColor(amount)}></div>
      <div className="coupon-container">
        <p className="coupon-title">{title + ' ( ' + kstFormatter(amount) + ' )'}</p>
        <p className="coupon-dDay">{'유효기간 : ~ ' + dDay}</p>
      </div>
    </S.Coupon>
  );
};

export default Coupon;
