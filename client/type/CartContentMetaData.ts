type CartContentMetaData = {
  allToggle: boolean;
  maxLength: number;
  totalPrice: number;
  totalDiscount: number;
  checkedCount: number;
  shipmentPrice: number;
};

type OrderContentMetaData = {
  totalPrice: number;
  shipmentPrice: number;
  totalDiscount: number;
};

export type { CartContentMetaData, OrderContentMetaData };
