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
import User from './User';

export interface IReviewLike {
  id?: number;
  isLike: boolean;
  isDislike: boolean;
  reviewId: number;
  userId: number;
}

@Table
export default class ReviewLike extends Model<IReviewLike> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  isLike: boolean;

  @Column
  isDislike: boolean;

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

  @AllowNull(false)
  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;
}
