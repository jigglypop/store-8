import { ICartGetRes, ClientCartData } from '@middle/type/cart/cart';

export function cartDataChanger(responseCart: ICartGetRes | null): ClientCartData[] {
  let result: ClientCartData[] = [];
  if (responseCart) {
    responseCart.cart.map((element) => {
      result.push({
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
