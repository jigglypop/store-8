import {
  AutoIncrement,
  AllowNull,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  CreatedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import UserCoupon from './UserCoupon';

export interface ICoupon {
  id?: number;
  title: string;
  amount: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table
export default class Coupon extends Model<ICoupon> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  title: string;

  @AllowNull(false)
  @Column
  amount: number;

  @HasMany(() => UserCoupon)
  userCoupons: UserCoupon[];

  @Column
  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedOn: Date;
}
