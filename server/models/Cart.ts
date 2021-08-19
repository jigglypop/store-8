import {
  PrimaryKey,
  AutoIncrement,
  Column,
  Model,
  Table,
  ForeignKey,
  AllowNull,
  BelongsTo,
} from 'sequelize-typescript';

import ProductOption from './Option';
import Product from './Product';
import User from './User';

export interface ICart {
  id?: number;
  productId: number;
  productOptionId: number | null;
  userId: number;
  productCount: number;
}

@Table
export default class Cart extends Model<ICart> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  @ForeignKey(() => Product)
  productId: number;

  @BelongsTo(() => Product)
  product: Product;

  @Column
  @ForeignKey(() => ProductOption)
  productOptionId: number;

  @BelongsTo(() => ProductOption)
  productOption: ProductOption;

  @AllowNull(false)
  @Column
  @ForeignKey(() => User)
  userId: number;

  @BelongsTo(() => User)
  user: Product;

  @AllowNull(false)
  @Column
  productCount: number;
}
