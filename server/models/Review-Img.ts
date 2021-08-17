import { Column, Model, Table, ForeignKey, AllowNull, BelongsTo } from 'sequelize-typescript';
import Review from './Review';

interface IReview_Img {
  id: number;
  img_src: string;
}

@Table
export default class Review_Img extends Model<IReview_Img> {
  @Column({ primaryKey: true })
  id: number;

  @Column
  @AllowNull(false)
  img_src: string;

  @Column
  @AllowNull(false)
  @ForeignKey(() => Review)
  reviewId: number;

  @BelongsTo(() => Review)
  review: Review;
}
