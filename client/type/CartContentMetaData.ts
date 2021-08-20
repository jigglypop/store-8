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
  totalMileage: number;
  shipmentPrice: number;
  totalDiscount: number;
  usableMileage: number;
};

export type { CartContentMetaData, OrderContentMetaData };
