import {
  PrimaryKey,
  AutoIncrement,
  Column,
  Model,
  Table,
  DataType,
  NotNull,
} from 'sequelize-typescript';

export interface ICart {
  id: number;
  productId: number;
  productCount: number;
}

@Table
export default class Cart extends Model<ICart> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @NotNull
  @Column(DataType.BIGINT)
  productId: number;

  @NotNull
  @Column(DataType.INTEGER)
  productCount: number;
}
