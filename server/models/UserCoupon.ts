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

export interface IUserCoupon {
  id: number;
  userId: number;
  couponId: number;
  isUsed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

@Table({
  timestamps: false,
})
export default class UserCoupon extends Model<IUserCoupon> {
  @PrimaryKey
  @Column
  @AutoIncrement
  id: number;

  @AllowNull(false)
  @Column
  @Default(false)
  isUsed: boolean;

  @AllowNull(false)
  @Column
  amount: string;

  @Column
  dDay: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedOn: Date;
}
