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
} from 'sequelize-typescript';
import Product from './Product';
import Order from './Order';

export interface IOption {
  id: number;
  title: string;
}

@Table
export default class Option extends Model<IOption> {
  @AllowNull(false)
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
  products: Product;

  @HasMany(() => Order)
  orders: Order[];
}
