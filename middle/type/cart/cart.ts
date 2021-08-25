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

export type ICartGetRes = CartData[];

export interface ICartDeleteReq {
  cartIds: number[];
}

export type ICartDeleteRes = CartData[];
export interface ICartAddReq {
  productId: number;
  productOptionId: number | null;
  productCount: number;
}

export type ICartAddRes = CartData[];

export type ICartAddData = {
  productId: number;
  productOptionId: number | null;
  productCount: number;
};

export type ICartLocalGetData = {
  productIds: number[];
  optionIds: (number | null)[];
  productCounts: number[];
};

export type ICartLocalAddData = {
  productIds: number[];
  optionIds: (number | null)[];
  productCounts: number[];
};
