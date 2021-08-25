import { ReactElement } from 'react';
import { useRouter } from '@client/hooks/router/router';
import { IRouterReq } from '@client/store/router/router';
import { getRouterObj } from '@utils/pathname';
import { kstFormatter } from '@utils/utils';
import { checkCallString, checkEmailString, checkNameString } from '@utils/inputTypeChecker';
import { createToast } from '@client/utils/createToast';
import exMark from '@image/exclamMark.png';
import {
  CALC_GUIDE_TEXT,
  TOTAL_DISCOUNT_TEXT,
  TOTAL_PRODUCTS_TEXT,
  TOTAL_SHIPMENT_TEXT,
  TOTAL_RESULT_TEXT,
  TOTAL_ADD_TEXT,
} from '@constants/Cart';
import type { OrderContentMetaData } from '@client/type/CartContentMetaData';
import { ProceedOrderProps } from '@middle/type/product/order';
import * as S from './style';
import { CouponData } from '@middle/type/coupon/coupon';
import { useOrder } from '@client/hooks/order/order';
import { setFinishState } from '@store/product/finish';
import { useDispatch } from 'react-redux';

interface OrderProps {
  metaData: OrderContentMetaData;
  selectedCoupon: CouponData;
  totalState: ProceedOrderProps;
}

const OrderReceipt = (props: OrderProps): ReactElement => {
  const { proceedOrder } = useOrder();
  const { onChangeRouterAll } = useRouter();
  const dispatch = useDispatch();

  return (
    <S.OrderReceipt>
      <S.Receipt>
        <p className="amount-title">{TOTAL_RESULT_TEXT}</p>
        <div className="amount-row">
          <p>{TOTAL_PRODUCTS_TEXT}</p>
          <p className="amount">
            {kstFormatter(props.metaData.totalPrice + Math.abs(props.metaData.totalDiscount))}
          </p>
        </div>
        <div className="amount-row">
          <p>{TOTAL_SHIPMENT_TEXT}</p>
          <p className="amount">{kstFormatter(props.metaData.shipmentPrice)}</p>
        </div>
        <div className="amount-row">
          <p>{TOTAL_DISCOUNT_TEXT}</p>
          <p className="amount">
            {kstFormatter(props.metaData.totalDiscount + props.metaData.mcDiscount)}
          </p>
        </div>
      </S.Receipt>
      <S.TotalPrice>
        <p>{TOTAL_ADD_TEXT}</p>
        <p className="amount">
          {kstFormatter(
            props.metaData.totalPrice + props.metaData.shipmentPrice + props.metaData.mcDiscount
          )}
        </p>
      </S.TotalPrice>
      <S.OrderNow>
        <button
          onClick={async (e) => {
            if (checkNameString(props.totalState.addressInfo.name) !== 2) {
              const nameInput = document.querySelector<HTMLInputElement>('.name-input');
              nameInput?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
              nameInput?.focus();
              createToast('이름을 입력하세요', true);
            } else if (checkCallString(props.totalState.addressInfo.call) !== 2) {
              const callInput = document.querySelector<HTMLInputElement>('.call-input');
              callInput?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
              callInput?.focus();
              createToast('전화번호를 입력하세요', true);
            } else if (checkEmailString(props.totalState.addressInfo.email) !== 2) {
              const emailInput = document.querySelector<HTMLInputElement>('.email-input');
              emailInput?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
              emailInput?.focus();
              createToast('이메일을 입력하세요', true);
            } else if (props.totalState.addressInfo.zonecode === '') {
              const zoneInput = document.querySelector<HTMLInputElement>('.zonecode-input');
              zoneInput?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
              createToast('배송지를 입력하세요', true);
            } else {
              await proceedOrder(props.totalState);
              dispatch(setFinishState(props.totalState));
              const to = '/finish';
              const RouterObj: IRouterReq = getRouterObj(to);
              onChangeRouterAll(RouterObj);
              history.pushState({ path: to }, to, to);
            }
          }}
        >
          {'주문하기'}
        </button>
        <div className="order-info">
          <img src={exMark} />
          <p>{CALC_GUIDE_TEXT}</p>
        </div>
      </S.OrderNow>
    </S.OrderReceipt>
  );
};

export default OrderReceipt;
