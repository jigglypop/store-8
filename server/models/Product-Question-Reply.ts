import {
  PrimaryKey,
  AutoIncrement,
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';

import Product_Question from './Product-Question';

interface IProductQuestion {
  [key: string]: any;
}

@Table
export default class Product_Question_Reply extends Model<IProductQuestion> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @Column
  @ForeignKey(() => Product_Question)
  questionId: number;

  @Column
  @Column(DataType.STRING(500))
  description: string;
}
