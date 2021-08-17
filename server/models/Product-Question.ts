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

interface IProductQuestion {
  [key: string]: any;
}

@Table
export default class Product_Question extends Model<IProductQuestion> {
  @Column({ primaryKey: true })
  id: number;

  @Column(DataType.STRING(60))
  @AllowNull(false)
  title: string;

  @Column(DataType.STRING(500))
  @AllowNull(false)
  contents: string;

  @Column(DataType.BOOLEAN)
  @AllowNull(false)
  isSecret: boolean;

  @Column
  @AllowNull(false)
  @ForeignKey(() => User)
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @Column
  @AllowNull(false)
  @ForeignKey(() => Product)
  productId: number;

  @BelongsTo(() => Product)
  product: Product;

  @Column
  @AllowNull(false)
  @ForeignKey(() => Product_Question_Reply)
  replyId: number;

  @BelongsTo(() => Product_Question_Reply)
  reply: Product_Question_Reply;
}
