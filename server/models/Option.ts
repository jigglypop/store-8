import {
  PrimaryKey,
  AutoIncrement,
  Column,
  Model,
  Table,
  DataType,
  NotNull,
  ForeignKey,
  BelongsTo,
  HasMany,
  AllowNull,
} from 'sequelize-typescript';

import Product from './Product';

export interface ICart {
  id: number;
  productId: number;
  amount: number;
  title: string;
}

@Table
export default class ProductOption extends Model<ICart> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @AllowNull(false)
  @Column(DataType.BIGINT)
  @ForeignKey(() => Product)
  productId: number;

  @AllowNull(false)
  @Column(DataType.BIGINT)
  amount: number;

  @AllowNull(false)
  @Column(DataType.CHAR(60))
  title: string;
}
