import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  AllowNull,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

import User from './User';
import Product from './Product';

export interface IQuestion {
  id?: number;
  title: string;
  contents: string;
  reply?: string;
  isSecret: boolean;
  userId: number;
  productId: number;
  createdAt?: Date;
  updatedAt?: Date;
  replyDate?: Date;
}

@Table
export default class Question extends Model<IQuestion> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING(60))
  title: string;

  @AllowNull(false)
  @Column(DataType.STRING(500))
  contents: string;

  @AllowNull(true)
  @Column(DataType.STRING(500))
  reply: string;

  @AllowNull(false)
  @Column(DataType.BOOLEAN)
  isSecret: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @Column
  replyDate: Date;

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @AllowNull(false)
  @ForeignKey(() => Product)
  @Column
  productId: number;

  @BelongsTo(() => Product)
  product: Product;
}
