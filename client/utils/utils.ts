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

import { PC_WIDTH_MIN, TABLET_WIDTH_MIN } from '@constants/Media';

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
  else if (amount > 0) return SHIPMENT_BASE;
  else return SHIPMENT_ZERO;
}

function getMileage(amount: number) {
  return Math.floor(amount / 100);
}

function mediaStringFormatter(pcString: string, tabletString: string, mobileString: string) {
  const width = window.innerWidth;
  if (width > PC_WIDTH_MIN) {
    return pcString;
  } else if (width > TABLET_WIDTH_MIN) {
    return tabletString;
  } else {
    return mobileString;
  }
}

export { kstFormatter, getShipmentAmount, getMileage, mediaStringFormatter };
