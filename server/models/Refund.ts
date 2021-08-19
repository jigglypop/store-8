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
import User from './User';

export interface IRefund {
  id: number;
  ordersId: number;
  isConfirmed: boolean;
  userId: number;
}

@Table({
  timestamps: true,
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

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
