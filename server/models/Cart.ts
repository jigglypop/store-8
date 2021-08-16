import {
  PrimaryKey,
  AutoIncrement,
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  AllowNull,
} from 'sequelize-typescript';

import ProductOption from './Option';
import Product from './Product';
import User from './User';

export interface ICart {
  id?: number;
  productId: number;
  productOptionId: number;
  userId: number;
  productCount: number;
}

@Table
export default class Cart extends Model<ICart> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @Column(DataType.BIGINT)
  @ForeignKey(() => ProductOption)
  productOptionId: number;

  @AllowNull(false)
  @Column(DataType.BIGINT)
  @ForeignKey(() => Product)
  productId: number;

  @AllowNull(false)
  @Column(DataType.BIGINT)
  @ForeignKey(() => User)
  userId: number;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  productCount: number;
}
