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
} from 'sequelize-typescript';

import UserCoupon from './UserCoupon';

export interface ICoupon {
  id: number;
  title: string;
  amount: string;
  dDay: string;
}

@Table({
  timestamps: false,
})
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
  amount: string;

  @Column
  dDay: string;

  @HasMany(() => UserCoupon)
  userCoupons: UserCoupon[];

  @Column
  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;
}
