import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  AllowNull,
  BelongsTo,
  HasMany,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

import User from './User';
import Product from './Product';
import ReviewImg from './ReviewImg';

export interface IReview {
  id?: number;
  title: string;
  contents: string;
  score: number;
  userId: number;
  productId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table
export default class Review extends Model<IReview> {
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

  @AllowNull(false)
  @Column(DataType.FLOAT)
  score: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

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

  @HasMany(() => ReviewImg)
  reviewImg: ReviewImg[];
}
