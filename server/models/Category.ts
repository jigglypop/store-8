import {
  AllowNull,
  AutoIncrement,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  Unique,
} from 'sequelize-typescript';
import Product from './Product';

export interface ICategory {
  id?: number;
  title: string;
}

@Table
export default class Category extends Model<ICategory> {
  @AllowNull(false)
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @AllowNull(false)
  @Unique
  @Column
  title: string;

  @HasMany(() => Product)
  products: Product[];
}
