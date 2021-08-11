import {
  SHIPMENT_BASE,
  SHIPMENT_HIGH,
  SHIPMENT_HIGH_BASE,
  SHIPMENT_MIDDLE,
  SHIPMENT_MIDDLE_BASE,
  SHIPMENT_LOW,
  SHIPMENT_LOW_BASE,
  SHIPMENT_ZERO,
  SHIPMENT_ZERO_BASE,
} from '@constants/Cart';

function kstFormatter(amount: number, suffix: boolean = true) {
  if (suffix) {
    return amount.toLocaleString() + '원';
  } else {
    return amount.toLocaleString();
  }
}

function getShipmentAmount(amount: number) {
  if (amount > SHIPMENT_ZERO_BASE) return SHIPMENT_ZERO;
  else if (amount > SHIPMENT_LOW_BASE) return SHIPMENT_LOW;
  else if (amount > SHIPMENT_MIDDLE_BASE) return SHIPMENT_MIDDLE;
  else if (amount > SHIPMENT_HIGH_BASE) return SHIPMENT_HIGH;
  else return SHIPMENT_BASE;
}

export { kstFormatter, getShipmentAmount };
