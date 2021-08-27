import { IRefund } from '@server/models/Refund';

export const REFUNDS: IRefund[] = [
  {
    id: 1,
    orderId: 1,
    isConfirmed: false,
    userId: 1,
    state: '신청 대기',
  },
  {
    id: 2,
    orderId: 2,
    isConfirmed: false,
    userId: 1,
    state: '신청 대기',
  },
  {
    id: 3,
    orderId: 3,
    isConfirmed: false,
    userId: 1,
    state: '신청 대기',
  },
  {
    id: 4,
    orderId: 4,
    isConfirmed: true,
    userId: 1,
    state: '신청 대기',
  },
  {
    id: 5,
    orderId: 5,
    isConfirmed: true,
    userId: 1,
    state: '신청 대기',
  },
  {
    id: 6,
    orderId: 5,
    isConfirmed: true,
    userId: 1,
    state: '신청 대기',
  },
  {
    id: 7,
    orderId: 6,
    isConfirmed: false,
    userId: 1,
    state: '신청 대기',
  },
];
