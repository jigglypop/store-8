import {
  AllowNull,
  Column,
  CreatedAt,
  ForeignKey,
  Model,
  Table,
  HasMany,
  UpdatedAt,
  BelongsTo,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';
import Order from './Order';

import User from './User';

export interface IAddress {
  id?: number;
  userId: number;
  location: string;
  extraLocation: string;
  zonecode: string;
  call: string;
  email: string;
  title: string;
  receiver: string;
  isBase: boolean;
  creationAt?: Date;
  updatedAt?: Date;
}

@Table
export default class Address extends Model<IAddress> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  location: string;

  @AllowNull(false)
  @Column
  extraLocation: string;

  @AllowNull(false)
  @Column
  zonecode: string;

  @AllowNull(false)
  @Column
  title: string;

  @AllowNull(false)
  @Column
  receiver: string;

  @AllowNull(false)
  @Column
  call: string;

  @AllowNull(false)
  @Column
  email: string;

  @AllowNull(false)
  @Column
  isBase: boolean;

  @CreatedAt
  creationAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @AllowNull(false)
  @Column
  @ForeignKey(() => User)
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Order)
  orders: Order[];
}
