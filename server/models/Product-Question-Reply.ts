import {
  Column,
  Model,
  Table,
  DataType,
  ForeignKey,
  AllowNull,
  BelongsTo,
} from 'sequelize-typescript';

import Product_Question from './Product-Question';

interface IProductQuestion {
  [key: string]: any;
}

@Table
export default class Product_Question_Reply extends Model<IProductQuestion> {
  @Column({ primaryKey: true })
  id: number;

  @Column
  @AllowNull(false)
  @ForeignKey(() => Product_Question)
  questionId: number;

  @BelongsTo(() => Product_Question)
  question: Product_Question;

  @Column(DataType.STRING(500))
  @AllowNull(false)
  contents: string;
}
