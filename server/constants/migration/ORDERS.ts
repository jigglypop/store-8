// export interface IOrder {
//     id: number;
// orderNumber: string;
// userId: number;
// productId: number;
// productCount: number;
// productAmount: number;
// optionId: number;
// state: string;
// isConfirmed: boolean;
// createdAt: Date;
// updatedOn: Date;
// }

import { IOrder } from '@server/models/Order';

export const ORDERS: IOrder[] = [
  {
    id: 1,
    orderNumber: 'WTC-STORE-08-01',
    userId: 1,
    productId: 1,
    productCount: 2,
    productAmount: 23000,
    state: '배송완료',
    isConfirmed: true,
  },
  {
    id: 2,
    orderNumber: 'WTC-STORE-08-02',
    userId: 1,
    productId: 2,
    productCount: 3,
    productAmount: 8000,
    state: '배송완료',
    isConfirmed: true,
  },
  {
    id: 3,
    orderNumber: 'WTC-STORE-08-03',
    userId: 1,
    productId: 3,
    productCount: 1,
    productAmount: 8000,
    state: '배송완료',
    isConfirmed: true,
  },
  {
    id: 4,
    orderNumber: 'WTC-STORE-08-04',
    userId: 1,
    productId: 4,
    productCount: 2,
    productAmount: 12000,
    state: '배송완료',
    isConfirmed: true,
  },
  {
    id: 5,
    orderNumber: 'WTC-STORE-08-05',
    userId: 1,
    productId: 5,
    productCount: 2,
    productAmount: 1500,
    state: '배송완료',
    isConfirmed: true,
    optionId: 2,
  },
  {
    id: 6,
    orderNumber: 'WTC-STORE-08-05',
    userId: 1,
    productId: 5,
    productCount: 2,
    productAmount: 1500,
    state: '배송완료',
    isConfirmed: true,
    optionId: 4,
  },
  {
    id: 7,
    orderNumber: 'WTC-STORE-08-06',
    userId: 1,
    productId: 6,
    productCount: 1,
    productAmount: 16000,
    state: '배송완료',
    isConfirmed: true,
  },
];
