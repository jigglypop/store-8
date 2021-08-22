export type CartData = {
  id: number;
  imgSrc: string;
  title: string;
  count: number;
  originalAmount: number;
  amount: number;
  option: string;
  optionId: number;
  productId: number;
};

export type ClientCartData = {
  id: number;
  isChecked: boolean;
  imgLink: string;
  title: string;
  option: string;
  count: number;
  amount: number;
  originalAmount: number;
  optionId: number;
  productId: number;
};

export interface ICartGetReq {
  userId: number;
}

export type ICartGetRes = CartData[];

export interface ICartDeleteReq {
  userId: number;
  cartIds: number[];
}

export type ICartDeleteRes = CartData[];
export interface ICartAddReq {
  userId: number;
  productId: number;
  productOptionId: number | null;
  productCount: number;
}

export type ICartAddRes = CartData[];
