import {
  PrimaryKey,
  AutoIncrement,
  Column,
  Model,
  Table,
  DataType,
  AllowNull,
} from 'sequelize-typescript';
export interface IProduct {
  id?: number;
  title: string;
  amount: number;
  productImgSrc: string;
  detailImgSrc: string;
}

@Table
export default class Product extends Model<IProduct> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.BIGINT)
  id: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  title: string;

  @AllowNull(false)
  @Column(DataType.INTEGER)
  amount: number;

  @AllowNull(false)
  @Column(DataType.STRING)
  productImgSrc: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  detailImgSrc: string;
}
