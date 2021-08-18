import { CartData, ClientCartData } from '@middle/type/cart/cart';

export function cartDataChanger(responseCart: CartData[] | null): ClientCartData[] {
  let result: ClientCartData[] = [];
  if (responseCart) {
    responseCart.map((element) => {
      result.push({
        id: element.id,
        isChecked: true,
        isCoupon: true,
        imgLink: element.imgSrc,
        title: element.title,
        option: element.option,
        count: element.count,
        amount: element.amount,
      });
    });
  }
  return result;
}
