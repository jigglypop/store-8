import { AllowNull, Column, ForeignKey, Model, Table, Unique, HasMany } from 'sequelize-typescript';

import Address from './Address';
import ProductQuestion from './ProductQuestion';
import Review from './Review';
import Wish from './Wish';
import Order from './Order';

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

  @HasMany(() => Address)
  addresses: Address[];

  @HasMany(() => Wish)
  wishes: Wish[];

  @HasMany(() => ProductQuestion)
  productQuestions: ProductQuestion[];

  @HasMany(() => Review)
  reviews: Review[];

  @HasMany(() => Order)
  orders: Order[];
}
