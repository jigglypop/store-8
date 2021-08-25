import { mediaStringFormatter } from '@utils/utils';

const ORDER_READY: number = 1;
const ORDER_START: number = 2;
const ORDER_FINISH: number = 3;

const TOTAL_TEXT: string = '총';
const KST_AMOUNT_UNIT: string = '원';
const TOTAL_ADD_TEXT: string = '결제 금액';
const TOTAL_RESULT_TEXT: string = '총계';
const TOTAL_DISCOUNT_TEXT: string = '총 할인 금액';
const TOTAL_PRODUCTS_TEXT: string = '총 상품 금액';
const TOTAL_SHIPMENT_TEXT: string = '총 배송비';
const DELETE_SELECT_PRODUCT: string = '선택 상품 삭제';

const PROCEED_GUIDE_TEXT: string = '주문서 작성 단계에서 할인/적립금 적용을 하실 수 있습니다.';

const NOTHING_IN_TEXT: string = '장바구니에 담겨있는 상품이 없습니다.';

const NEXT_DELETE_TEXT: string = '다음 물품들이 장바구니에서 삭제됩니다.';
const CHOOSE_COUPON_TEXT: string = '사용할 쿠폰을 선택해주세요!';
const SHOW_COUPON_DETAIL: string = '사용한 쿠폰은 흐리게 표시됩니다.';
const SHOW_COUPON_TEXT: string = '사용자의 쿠폰 내역입니다.';

const CALC_GUIDE_TEXT: string = '쿠폰과 적립금이 포함된 금액입니다';

const SHIPMENT_BASE: number = 4500;
const SHIPMENT_HIGH: number = 3500;
const SHIPMENT_HIGH_BASE: number = 10000;
const SHIPMENT_MIDDLE: number = 2500;
const SHIPMENT_MIDDLE_BASE: number = 20000;
const SHIPMENT_LOW: number = 1500;
const SHIPMENT_LOW_BASE: number = 30000;
const SHIPMENT_ZERO: number = 0;
const SHIPMENT_ZERO_BASE: number = 40000;

export {
  TOTAL_TEXT,
  KST_AMOUNT_UNIT,
  TOTAL_ADD_TEXT,
  NOTHING_IN_TEXT,
  NEXT_DELETE_TEXT,
  CHOOSE_COUPON_TEXT,
  PROCEED_GUIDE_TEXT,
  TOTAL_RESULT_TEXT,
  TOTAL_DISCOUNT_TEXT,
  TOTAL_PRODUCTS_TEXT,
  TOTAL_SHIPMENT_TEXT,
  DELETE_SELECT_PRODUCT,
  SHOW_COUPON_TEXT,
  SHOW_COUPON_DETAIL,
  CALC_GUIDE_TEXT,
  SHIPMENT_BASE,
  SHIPMENT_HIGH,
  SHIPMENT_HIGH_BASE,
  SHIPMENT_MIDDLE,
  SHIPMENT_MIDDLE_BASE,
  SHIPMENT_LOW,
  SHIPMENT_LOW_BASE,
  SHIPMENT_ZERO,
  SHIPMENT_ZERO_BASE,
  ORDER_READY,
  ORDER_START,
  ORDER_FINISH,
};
