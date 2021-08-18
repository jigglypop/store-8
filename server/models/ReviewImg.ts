import {
  Column,
  Model,
  Table,
  ForeignKey,
  AllowNull,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import Review from './Review';

export interface IReview_Img {
  id: number;
  img_src: string;
  reviewId: number;
  createdAt: Date;
  updatedAt: Date;
}

@Table({
  timestamps: false,
})
export default class ReviewImg extends Model<IReview_Img> {
  @Column({ primaryKey: true })
  id: number;

  @AllowNull(false)
  @Column
  img_src: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(false)
  @Column
  @ForeignKey(() => Review)
  reviewId: number;

  @BelongsTo(() => Review)
  review: Review;
}