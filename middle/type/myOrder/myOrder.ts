export interface IOrder {
  date: string; // order day
  id: number; // refundId : for key
  orderNumber: string; // order
  title: string; // productId
  option?: string; //
  productAmount: number;
  productCount: number;
  state: string; // 주문상태
  isConfirmed: boolean; // 확인/리뷰
  productImgSrc: string;
}

export type IMyOrderRes = IOrder[];
