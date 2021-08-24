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

import { COUPON_LOW_BASE, COUPON_HIGH_BASE } from '@constants/Order';

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

function getCouponColor(amount: number): string {
  if (amount < COUPON_LOW_BASE) {
    return 'dark-blue';
  } else if (amount < COUPON_HIGH_BASE) {
    return 'yellow';
  } else {
    return 'red';
  }
}

export const bodyScroll = {
  lock: () => (document.body.style.overflow = 'hidden'),
  unlock: () => {
    document.body.style.overflow = 'unset';
    document.body.style.overflowX = 'hidden';
  },
};

export { kstFormatter, getShipmentAmount, getMileage, mediaStringFormatter, getCouponColor };
