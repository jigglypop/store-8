import {
  PrimaryKey,
  AutoIncrement,
  AllowNull,
  Column,
  Model,
  Table,
  ForeignKey,
  CreatedAt,
  UpdatedAt,
  BelongsTo,
  HasOne,
  HasMany,
} from 'sequelize-typescript';

import User from './User';
import Product from './Product';
import ProductOption from './Option';
import Refund from './Refund';
import Address from './Address';

// ProductAmount 는 살때 당시의 가격임에 주의!
export interface IOrder {
  id?: number;
  orderNumber: string;
  userId: number;
  productId: number;
  productCount: number;
  productAmount: number;
  addressId: number;
  optionId?: number;
  state: string;
  isConfirmed: boolean;
}

@Table({
  timestamps: true,
})
export default class Order extends Model<IOrder> {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Column
  @ForeignKey(() => User)
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @AllowNull(false)
  @Column
  @ForeignKey(() => Product)
  productId: number;

  @BelongsTo(() => Product)
  product: Product;

  @AllowNull(true)
  @Column
  @ForeignKey(() => ProductOption)
  optionId: number;

  @AllowNull(true)
  @Column
  @ForeignKey(() => Address)
  addressId: number;

  @BelongsTo(() => Address)
  address: Address;

  @BelongsTo(() => ProductOption)
  productOption: ProductOption;

  @Column
  orderNumber: string;

  @Column
  productCount: number;

  @Column
  productAmount: number;

  @Column
  state: string;

  @Column
  isConfirmed: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedOn: Date;

  @HasOne(() => Refund)
  refund: Refund;
}
