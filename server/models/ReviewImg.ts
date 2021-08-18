import { Column, Model, Table, ForeignKey, AllowNull, BelongsTo } from 'sequelize-typescript';
import Review from './Review';

export interface IReview_Img {
  id: number;
  img_src: string;
}

@Table
export default class ReviewImg extends Model<IReview_Img> {
  @Column({ primaryKey: true })
  id: number;

  @AllowNull(false)
  @Column
  img_src: string;

  @AllowNull(false)
  @Column
  @ForeignKey(() => Review)
  reviewId: number;

  @BelongsTo(() => Review)
  review: Review;
}
