import {
  PrimaryKey,
  AutoIncrement,
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';

import User from './User';

interface IProductQuestion {
  [key: string]: any;
}

@Table
export default class Product_Question extends Model<IProductQuestion> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @Column
  @ForeignKey(() => User)
  userId: number;

  //Product 추가
  // @Column
  // @ForeignKey(() => Product)
  // productId: number;

  @Column(DataType.STRING(60))
  title: string;

  @Column
  @Column(DataType.STRING(500))
  description: string;

  @Column
  @Column(DataType.BOOLEAN)
  isSecret: boolean;
}
