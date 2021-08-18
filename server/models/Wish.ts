import {
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Column,
  Model,
  Table,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
} from 'sequelize-typescript';

import User from './User';
import Product from './Product';

export interface IWish {
  id: number;
  userId: number;
  productId: number;
  productCount: number;
}

@Table({
  timestamps: false,
})
export default class Wish extends Model<IWish> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

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

  @Column
  productCount: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedOn: Date;
}
