import { IRefund } from '@server/models/Refund';

export const REFUNDS: IRefund[] = [
  {
    id: 1,
    ordersId: 1,
    isConfirmed: false,
    userId: 1,
    state: '신청 대기',
  },
  {
    id: 2,
    ordersId: 2,
    isConfirmed: false,
    userId: 1,
    state: '신청 대기',
  },
  {
    id: 3,
    ordersId: 3,
    isConfirmed: false,
    userId: 1,
    state: '신청 대기',
  },
  {
    id: 4,
    ordersId: 4,
    isConfirmed: true,
    userId: 1,
    state: '신청 대기',
  },
  {
    id: 5,
    ordersId: 5,
    isConfirmed: true,
    userId: 1,
    state: '신청 대기',
  },
  {
    id: 6,
    ordersId: 5,
    isConfirmed: true,
    userId: 1,
    state: '신청 대기',
  },
  {
    id: 7,
    ordersId: 6,
    isConfirmed: false,
    userId: 1,
    state: '신청 대기',
  },
];
