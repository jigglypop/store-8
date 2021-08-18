import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  AllowNull,
  BelongsTo,
} from 'sequelize-typescript';

import User from './User';
import Product from './Product';

export interface IProductQuestion {
  id: number;
  title: string;
  contents: string;
  isSecret: boolean;
}

@Table
export default class ProductQuestion extends Model<IProductQuestion> {
  @Column({ primaryKey: true })
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING(60))
  title: string;

  @AllowNull(false)
  @Column(DataType.STRING(500))
  contents: string;

  @AllowNull(false)
  @Column(DataType.STRING(500))
  reply: string;

  @AllowNull(false)
  @Column(DataType.BOOLEAN)
  isSecret: boolean;

  @AllowNull(false)
  @Column
  @ForeignKey(() => User)
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @AllowNull(false)
  @Column
  @ForeignKey(() => Product)
  productId: number;

  @BelongsTo(() => Product)
  product: Product;
}
