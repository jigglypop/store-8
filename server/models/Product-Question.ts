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
import Product_Question_Reply from './Product-Question-Reply';

export interface IProductQuestion {
  id: number;
  title: string;
  contents: string;
  isSecret: boolean;
}

@Table
export default class Product_Question extends Model<IProductQuestion> {
  @Column({ primaryKey: true })
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING(60))
  title: string;

  @AllowNull(false)
  @Column(DataType.STRING(500))
  contents: string;

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

  @AllowNull(false)
  @Column
  @ForeignKey(() => Product_Question_Reply)
  replyId: number;

  @BelongsTo(() => Product_Question_Reply)
  reply: Product_Question_Reply;
}
