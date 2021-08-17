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

interface IReview {
  id: number;
  title: string;
  contents: string;
  score: number;
}

@Table
export default class Review extends Model<IReview> {
  @Column({ primaryKey: true })
  id: number;

  @Column(DataType.STRING(60))
  @AllowNull(false)
  title: string;

  @Column(DataType.STRING(500))
  @AllowNull(false)
  contents: string;

  @Column(DataType.FLOAT)
  @AllowNull(false)
  score: number;

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

  @HasMany(() => Review_Img)
  review_img: Review_Img[];
}
