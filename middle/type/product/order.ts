export type OrderCreateReq = {
  userId?: number;
  productIds: number[];
  productCounts: number[];
  productAmounts: number[];
  optionIds: number[];
};

export type OrderCreateRes = {
  data: string;
};
