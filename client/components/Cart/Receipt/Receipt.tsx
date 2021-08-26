import { ReactElement } from 'react';
import { getShipmentAmount, kstFormatter } from '@utils/utils';
import ExMark from '@image/svg/exMark.svg';
import {
  PROCEED_GUIDE_TEXT,
  TOTAL_DISCOUNT_TEXT,
  TOTAL_PRODUCTS_TEXT,
  TOTAL_SHIPMENT_TEXT,
  TOTAL_RESULT_TEXT,
  TOTAL_ADD_TEXT,
} from '@constants/Cart';
import * as S from './style';
import { CartContentMetaData } from '@client/type/CartContentMetaData';
import cache from '@client/utils/cache';
import { useRouter } from '@client/hooks/router/router';
import { IRouterReq } from '@client/store/router/router';
import { getRouterObj } from '@client/utils/pathname';
import { useState } from 'react';
import LoginNeedModal from '@components/common/LoginNeedModal/LoginNeedModal';

interface MetaData {
  metaData: CartContentMetaData;
}

function Receipt({ metaData }: MetaData): ReactElement {
  const { onChangeRouterAll } = useRouter();
  const [isLoginFocused, setIsLoginFocused] = useState(false);

  const closeForm = () => {
    setIsLoginFocused(false);
  };

  const onClick = () => {
    const isLoggedIn = cache.get('token');
    if (isLoggedIn) {
      const to = '/order';
      const RouterObj: IRouterReq = getRouterObj(to);
      onChangeRouterAll(RouterObj);
      history.pushState({ path: to }, to, to);
    } else {
      setIsLoginFocused(true);
    }
  };

  console.log(metaData);

  return (
    <S.ReceiptContainer>
      <S.Receipt>
        <p className="amount-title">{TOTAL_RESULT_TEXT}</p>
        <div className="amount-row">
          <p>{TOTAL_PRODUCTS_TEXT}</p>
          <p className="amount">
            {kstFormatter(metaData.totalPrice + Math.abs(metaData.totalDiscount))}
          </p>
        </div>
        <div className="amount-row">
          <p>{TOTAL_SHIPMENT_TEXT}</p>
          <p className="amount">{kstFormatter(metaData.shipmentPrice)}</p>
        </div>
        <div className="amount-row">
          <p>{TOTAL_DISCOUNT_TEXT}</p>
          <p className="amount">{kstFormatter(metaData.totalDiscount)}</p>
        </div>
      </S.Receipt>
      <S.TotalPrice>
        <p>{TOTAL_ADD_TEXT}</p>
        <p className="amount">
          {kstFormatter(metaData.totalPrice + getShipmentAmount(metaData.totalPrice))}
        </p>
      </S.TotalPrice>
      <S.OrderNow>
        {metaData.checkedCount === 0 ? (
          <button className="disabled-button" disabled>
            {'주문하기'}
          </button>
        ) : (
          <button onClick={() => onClick}>{'주문하기'}</button>
        )}
        <div className="order-info">
          <ExMark className="ex-mark-icon" />
          <p>{PROCEED_GUIDE_TEXT}</p>
        </div>
      </S.OrderNow>
      {isLoginFocused && <LoginNeedModal cancelCbFn={closeForm} />}
    </S.ReceiptContainer>
  );
}

export default Receipt;
