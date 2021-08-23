import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import Cart from './Cart';
import Category from './Category';
import Option from './Option';
import Order from './Order';
import Question from './Question';
import Review from './Review';
import Wish from './Wish';

export interface IProduct {
  id?: number;
  title: string;
  productImgSrc: string;
  detailImgSrc: string;
  amount: number;
  originalAmount: number;
  sale: number;
  categoryId: number;
}

@Table
export default class Product extends Model<IProduct> {
  @AllowNull(false)
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @AllowNull(false)
  @Column
  title: string;

  @AllowNull(false)
  @Column
  productImgSrc: string;

  @AllowNull(false)
  @Column
  detailImgSrc: string;

  @AllowNull(false)
  @Column
  amount: number;

  @AllowNull(false)
  @Column
  originalAmount: number;

  @AllowNull(false)
  @Column
  sale: number;

  // 상위(카테고리)
  @AllowNull(false)
  @ForeignKey(() => Category)
  @Column
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;

  // 하위(옵션)
  @HasMany(() => Option)
  options: Option[];

  @HasMany(() => Cart)
  carts: Cart[];
  @HasMany(() => Wish)
  wishes: Wish[];

  @HasMany(() => Question)
  Questions: Question[];

  @HasMany(() => Review)
  reviews: Review[];

  @HasMany(() => Order)
  orders: Order[];
}
