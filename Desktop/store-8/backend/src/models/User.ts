import { AllowNull, Column, Model, Table, Unique } from "sequelize-typescript";

export interface IUser {
  id?: string;
  username: string;
  hashedPassword: string;
  email?: string;
  imageUrl?: string;
}

@Table
export default class User extends Model<IUser> {
  @AllowNull(false)
  @Unique
  @Column
  username: string;

  @AllowNull
  @Unique
  @Column
  email: string;

  @Column
  hashedPassword: string;

  @AllowNull
  @Column
  imageUrl: string;
}
