export type CartData = {
  imgSrc: string;
  title: string;
  count: number;
  amount: number;
  option: string;
};

export interface ICartGetReq {
  userId: number;
}

export interface ICartGetRes {
  status: number;
  data: CartData[];
}
