import {
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  Table,
} from 'sequelize-typescript';
import Order from './Order';

export interface IRefund {
  id: number;
  ordersId: number;
  isConfirmed: boolean;
}

@Table({
  timestamps: false,
})
export default class Refund extends Model<IRefund> {
  @Column({ primaryKey: true })
  id: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedOn: Date;

  @Column
  isConfirmed: boolean;

  @AllowNull(false)
  @ForeignKey(() => Order)
  @Column
  ordersId: number;

  @BelongsTo(() => Order)
  order: Order;
}
