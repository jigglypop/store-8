import {
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  AllowNull,
  Table,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import Order from './Order';
import User from './User';

export interface IRefund {
  id?: number;
  ordersId: number;
  isConfirmed: boolean;
  userId: number;
  state: string;
}

@Table({
  timestamps: true,
})
export default class Refund extends Model<IRefund> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedOn: Date;

  @Column
  isConfirmed: boolean;

  @Column
  state: string;

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
