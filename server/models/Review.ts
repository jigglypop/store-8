import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  AllowNull,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';

import User from './User';
import Product from './Product';
import Review_Img from './Review-Img';

export interface IReview {
  id: number;
  title: string;
  contents: string;
  score: number;
}

@Table
export default class Review extends Model<IReview> {
  @Column({ primaryKey: true })
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

  @HasMany(() => Review_Img)
  review_img: Review_Img[];
}
