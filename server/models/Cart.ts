import {
  PrimaryKey,
  AutoIncrement,
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';

import ProductOption from './Option';
import User from './User';

export interface ICart {
  id?: number;
  productOptionId: number;
  userId: number;
  productCount: number;
}

@Table
export default class Cart extends Model<ICart> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @Column(DataType.BIGINT)
  @ForeignKey(() => ProductOption)
  productOptionId: number;

  @Column(DataType.BIGINT)
  @ForeignKey(() => User)
  userId: number;

  @Column(DataType.INTEGER)
  productCount: number;
}
