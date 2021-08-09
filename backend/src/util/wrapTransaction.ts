import { sequelize } from "../models";
import { Transaction } from "sequelize";

const wrapTransaction = async (fns: (t: Transaction) => Promise<unknown>[]) =>
  await sequelize.transaction((t) => Promise.all(fns(t)));

export default wrapTransaction;
