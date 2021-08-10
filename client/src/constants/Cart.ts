const ORDER_READY: number = 1;
const ORDER_START: number = 2;
const ORDER_FINISH: number = 3;

const COUPON_BLOCK_TEXT: string = '쿠폰적용';
const CHANGE_COUNT_TEXT: string = '옵션/수량변경';
const INFO_HEADER_TEXT: string = '상품/옵션 정보';
const COUNT_HEADER_TEXT: string = '수량';
const AMOUNT_HEADER_TEXT: string = '상품금액';
const SHIP_HEADER_TEXT: string = '배송비';

export type ContentData = {
  isCoupon: boolean;
  isChecked: boolean;
  imgLink: string;
  title: string;
  option: string;
  count: number;
  amount: number /* TODO : 금액을 number 로 할지, Big Int 로 할지? */;
};

export {
  COUPON_BLOCK_TEXT,
  CHANGE_COUNT_TEXT,
  INFO_HEADER_TEXT,
  COUNT_HEADER_TEXT,
  AMOUNT_HEADER_TEXT,
  SHIP_HEADER_TEXT,
  ORDER_READY,
  ORDER_START,
  ORDER_FINISH,
};
