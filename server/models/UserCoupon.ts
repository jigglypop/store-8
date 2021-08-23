import {
  AutoIncrement,
  AllowNull,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
  Default,
} from 'sequelize-typescript';

import User from './User';
import Coupon from './Coupon';

export interface IUserCoupon {
  id?: number;
  userId: number;
  couponId: number;
  isUsed: boolean;
  dDay: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table({
  timestamps: false,
})
export default class UserCoupon extends Model<IUserCoupon> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Default(false)
  @Column
  isUsed: boolean;

  @Column
  dDay: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedOn: Date;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @AllowNull(false)
  @ForeignKey(() => Coupon)
  @Column
  couponId: number;

  @BelongsTo(() => Coupon)
  coupon: Coupon;
}
