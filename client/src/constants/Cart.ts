const ORDER_READY: number = 1;
const ORDER_START: number = 2;
const ORDER_FINISH: number = 3;
const PROGRESS_TYPE_GREY: string = 'grey';
const PROGRESS_TYPE_BLACK: string = 'black';

export type ContentData = {
  isCoupon: boolean;
  isChecked: boolean;
  imgLink: string;
  title: string;
  option: string;
  count: number;
  amount: number /* TODO : 금액을 number 로 할지, Big Int 로 할지? */;
};

export { ORDER_READY, ORDER_START, ORDER_FINISH, PROGRESS_TYPE_GREY, PROGRESS_TYPE_BLACK };
