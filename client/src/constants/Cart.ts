const ORDER_READY: number = 1;
const ORDER_START: number = 2;
const ORDER_FINISH: number = 3;

const COUPON_BLOCK_TEXT: string = '쿠폰적용';
const CHANGE_COUNT_TEXT: string = '옵션/수량변경';
const INFO_HEADER_TEXT: string = '상품/옵션 정보';
const COUNT_HEADER_TEXT: string = '수량';
const AMOUNT_HEADER_TEXT: string = '상품금액';
const SHIP_HEADER_TEXT: string = '배송비';
const SHIP_BASE_TEXT: string = '기본배송비';
const PAY_TYPE_FIRST: string = '(택배-선결제)';
const TOTAL_TEXT: string = '총';
const TOTAL_AMOUNT_TEXT: string = '개의 상품금액';
const KST_AMOUNT_UNIT: string = '원';
const TOTAL_ADD_TEXT: string = '합계';

const DELETE_SELECT_PRODUCT: string = '선택 상품 삭제';
const LIKE_SELECT_PRODUCT: string = '선택 상품 찜';
const ORDER_SELECT_PRODUCT: string = '선택 상품 주문';
const ORDER_ALL_PRODUCT: string = '전체 상품 주문';
const PROCEED_GUIDE_TEXT: string = '주문서 작성 단계에서 할인/적립금 적용을 하실 수 있습니다.';

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
  COUPON_BLOCK_TEXT,
  CHANGE_COUNT_TEXT,
  INFO_HEADER_TEXT,
  COUNT_HEADER_TEXT,
  AMOUNT_HEADER_TEXT,
  SHIP_HEADER_TEXT,
  SHIP_BASE_TEXT,
  TOTAL_TEXT,
  TOTAL_AMOUNT_TEXT,
  KST_AMOUNT_UNIT,
  TOTAL_ADD_TEXT,
  PAY_TYPE_FIRST,
  DELETE_SELECT_PRODUCT,
  LIKE_SELECT_PRODUCT,
  ORDER_SELECT_PRODUCT,
  ORDER_ALL_PRODUCT,
  PROCEED_GUIDE_TEXT,
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
