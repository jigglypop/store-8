import {
  AllowNull,
  Column,
  CreatedAt,
  ForeignKey,
  Model,
  Table,
  UpdatedAt,
  BelongsTo,
} from 'sequelize-typescript';

import User from './User';

export interface IAddress {
  id: number;
  userId: number;
  location: string;
  call: string;
  title: string;
  receiver: string;
  isBase: boolean;
  creationAt: Date;
  updatedAt: Date;
}

@Table({
  timestamps: false,
})
export default class Address extends Model<IAddress> {
  @Column({ primaryKey: true })
  id: number;

  @AllowNull(false)
  @Column
  location: string;

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
}
