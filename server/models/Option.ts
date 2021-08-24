import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  Unique,
  HasMany,
  AutoIncrement,
} from 'sequelize-typescript';
import Product from './Product';
import Order from './Order';
import Cart from './Cart';

export interface IOption {
  id?: number;
  title: string;
}

@Table
export default class Option extends Model<IOption> {
  @AllowNull(false)
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @AllowNull(false)
  @Column
  title: string;

  @AllowNull(false)
  @ForeignKey(() => Product)
  @Column
  productId: number;

  @BelongsTo(() => Product)
  product: Product;

  @HasMany(() => Cart)
  carts: Cart[];
  products: Product;

  @HasMany(() => Order)
  orders: Order[];
}
