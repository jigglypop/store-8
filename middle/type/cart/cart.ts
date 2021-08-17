export type CartData = {
  id: number;
  imgSrc: string;
  title: string;
  count: number;
  amount: number;
  option: string;
};

export type ClientCartData = {
  id: number;
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

export interface ICartDeleteReq {
  userId: number;
  cartIds: number[];
}

export interface ICartDeleteRes {
  status: number;
  cartIds: number[];
}
