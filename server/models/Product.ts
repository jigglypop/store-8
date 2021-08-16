import { PrimaryKey, AutoIncrement, Column, Model, Table, DataType } from 'sequelize-typescript';
export interface IProduct {
  id: number;
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

  @Column(DataType.STRING)
  title: string;

  @Column(DataType.INTEGER)
  amount: number;

  @Column(DataType.STRING)
  productImgSrc: string;

  @Column(DataType.STRING)
  detailImgSrc: string;
}
