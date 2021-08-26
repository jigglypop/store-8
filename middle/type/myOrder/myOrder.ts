export interface IOrder {
  date: string; // order day
  id: number; // order id
  orderNumber: string; // order
  title: string;
  productId: number;
  option?: string; //
  productAmount: number;
  productCount: number;
  state: string; // 주문상태
  isConfirmed: boolean; // 확인/리뷰
  productImgSrc: string;
  reviewId?: number;
}

export type IMyOrderRes = IOrder[];
