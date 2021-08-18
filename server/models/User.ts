import { AllowNull, Column, ForeignKey, Model, Table, Unique, HasMany } from 'sequelize-typescript';
import Cart from './Cart';

import Address from './Address';
import Order from './Order';
import Question from './Question';
import Review from './Review';

import UserCoupon from './UserCoupon';
import Wish from './Wish';

export interface IUser {
  id?: string;
  username: string;
  hashedPassword: string;
  email?: string;
  imageUrl?: string;
}

@Table
export default class User extends Model<IUser> {
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
}
