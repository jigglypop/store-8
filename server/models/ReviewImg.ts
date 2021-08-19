import {
  Column,
  Model,
  Table,
  ForeignKey,
  AllowNull,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import Review from './Review';

export interface IReview_Img {
  id?: number;
  img_src: string;
  reviewId: number;
  createdAt?: Date;
  updatedAt?: Date;
}

@Table
export default class ReviewImg extends Model<IReview_Img> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  img_src: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(false)
  @ForeignKey(() => Review)
  @Column
  reviewId: number;

  @BelongsTo(() => Review)
  review: Review;
}
