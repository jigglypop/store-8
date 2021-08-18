// ## refund

// - id
// - OrdersId ( orders의 id, orders 의 orderNumber 가 아님에 유의, 자동 생성되는 필드 )
// - isConfirmed ( 환불 수락 여부 )

import { Column, Model, ForeignKey, BelongsTo, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import Order from './Order';

export interface IRefund {
  id: number;
  ordersId: number;
  isConfirmed: boolean;
}

export default class Refund extends Model<IRefund> {
  @Column({ primaryKey: true })
  id: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedOn: Date;

  @Column
  isConfirmed: boolean;

  @Column
  @ForeignKey(() => Order)
  ordersId: number;

  @BelongsTo(() => Order)
  order: Order;
}
