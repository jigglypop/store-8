export type CartData = {
  imgSrc: string;
  title: string;
  count: number;
  amount: number;
  option: string;
};

export type ClientCartData = {
  isCoupon: boolean;
  isChecked: boolean;
  imgLink: string;
  title: string;
  option: string;
  count: number;
  amount: number;
};

export interface ICartGetReq {
  userId: number;
}

export interface ICartGetRes {
  status: number;
  cart: CartData[];
}
