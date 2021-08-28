import { cartChangeApi } from '@api/cart';
import { ICartChangeReq } from '@middle/type/cart/cart';

export function useCart() {
  const changeCart = async (changeReqData: ICartChangeReq) => {
    const result = await cartChangeApi(changeReqData);
  };

  return { changeCart };
}
