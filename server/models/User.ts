import {
  AllowNull,
  Column,
  ForeignKey,
  Model,
  Table,
  Unique,
  HasMany,
  Default,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import Cart from './Cart';

import Address from './Address';
import Order from './Order';
import Question from './Question';
import Review from './Review';
import Refund from './Refund';

import UserCoupon from './UserCoupon';
import Wish from './Wish';
import ReviewLike from './ReviewLike';

export interface IUser {
  id?: number;
  username: string;
  hashedPassword: string;
  mileage: number;
  email?: string;
  imageUrl?: string;
}

@Table
export default class User extends Model<IUser> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Unique
  @Column
  username: string;

  @AllowNull
  @Unique
  @Column
  email: string;

  @Column
  hashedPassword: string;

  @AllowNull
  @Column
  imageUrl: string;

  @Default(0)
  @Column
  mileage: number;

  @HasMany(() => Cart)
  carts: Cart[];

  @HasMany(() => Address)
  addresses: Address[];

  @HasMany(() => Wish)
  wishes: Wish[];

  @HasMany(() => UserCoupon)
  userCoupons: UserCoupon[];

  @HasMany(() => Question)
  questions: Question[];

  @HasMany(() => Review)
  reviews: Review[];

  @HasMany(() => Order)
  orders: Order[];

  @HasMany(() => Refund)
  Refunds: Refund[];

  @HasMany(() => ReviewLike)
  ReviewLike: ReviewLike[];
}
