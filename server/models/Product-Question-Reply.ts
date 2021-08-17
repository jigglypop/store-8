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

export interface IProductQuestionReply {
  id: number;
  contents: string;
}

@Table
export default class Product_Question_Reply extends Model<IProductQuestionReply> {
  @Column({ primaryKey: true })
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING(500))
  contents: string;

  @AllowNull(false)
  @Column
  @ForeignKey(() => Product_Question)
  questionId: number;

  @BelongsTo(() => Product_Question)
  question: Product_Question;
}
