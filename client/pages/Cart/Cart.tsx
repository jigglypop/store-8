import { ReactElement, useEffect, useState } from 'react';
import CartHeader from '@components/Cart/Header/CartHeader';
import CartContentsContainer from '@components/Cart/Container/CartContentsContainer';
import Receipt from '@components/Cart/Receipt/Receipt';
import DeleteModal from '@components/Cart/DeleteModal/DeleteModal';

import { CartData } from '@middle/type/cart/cart';
import { ClientCartData } from '@middle/type/cart/cart';
import { ORDER_READY } from '@constants/Cart';
import { getShipmentAmount } from '@utils/utils';
import { cartDataChanger } from '@utils/responseTypeChanger';

import { getCart, delCart } from '@store/product/cart';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@client/store';

import * as S from './style';

function Cart(): ReactElement {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.cart);
  const [contents, setContents] = useState(cartDataChanger(cart));
  const [deleteItem, setDeleteLists] = useState([0]);
  const [isOpenForm, setOpenForm] = useState(false);

  useEffect(() => {
    // TODO: 현재 로그인한 사용자를 위한 userId 값도 받아와서 설정해줘야합니다. 현재는 테스트를 위해 이렇게 둡니다.
    dispatch(getCart({ userId: 1 }));
  }, []);

  useEffect(() => {
    setContents(cartDataChanger(cart));
  }, [cart]);

  const getTotalPrice = () => {
    let result = 0;
    contents.forEach((content) => {
      if (content.isChecked) result += content.amount * content.count;
    });
    return result;
  };

  const getTotalDiscount = () => {
    let result = 0;
    contents.forEach((content) => {
      if (content.isChecked && content.originalAmount !== 0) {
        result += (content.amount - content.originalAmount) * content.count;
      }
    });
    return result;
  };

  const getCheckedNum = () => {
    let result = 0;
    contents.forEach((content) => {
      if (content.isChecked) result += 1;
    });
    return result;
  };

  // 전체 toggle이 켜져있는지 확인하는 함수.
  const isOff = () => {
    let result: boolean = true;

    contents.forEach((content) => {
      if (!content.isChecked) result = false;
    });
    return result;
  };

  const calcMetaData = () => {
    const totalPrice = getTotalPrice();
    return {
      allToggle: isOff(),
      maxLength: contents.length,
      totalPrice: totalPrice,
      checkedCount: getCheckedNum(),
      shipmentPrice: getShipmentAmount(totalPrice),
      totalDiscount: getTotalDiscount(),
    };
  };

  const [metaData, setMetaData] = useState(calcMetaData());

  // Contents 가 바뀔 때 마다 toggle, 가격 등의 변화를 주기 위한 useEffect
  useEffect(() => {
    setMetaData(calcMetaData());
  }, [contents]);

  // 전체 toggle이 켜져있다면 모두 끄고, 꺼져있다면 모두 키는 함수
  const toggleAllHandler = () => {
    const temp: ClientCartData[] = [...contents];
    const toggleDest = !isOff();
    temp.forEach((content) => {
      content.isChecked = toggleDest;
      if (toggleDest && content.count === 0) {
        content.count = 1;
      }
    });
    setContents([...temp]);
  };

  // 하나의 check toggle을 관리하는 함수.
  const toggleOneHandler = (index: number) => {
    const temp: ClientCartData[] = [...contents];
    temp[index].isChecked = !temp[index].isChecked;
    if (temp[index].count === 0) {
      temp[index].count = 1;
    }
    setContents([...temp]);
  };

  const deleteCheckedItem = async () => {
    const temp: ClientCartData[] = []; // State 변경을 위해 저장
    const tempCart: CartData[] = cart ? [...cart] : [];
    const deletedIndex: number[] = [];
    const renewCart: CartData[] = [];

    contents.forEach((content, index) => {
      if (!content.isChecked) {
        temp.push(content);
        renewCart.push(tempCart[index]);
      } else {
        deletedIndex.push(index);
      }
    });
    setDeleteLists(deletedIndex);
    setOpenForm(true);
  };

  const closeForm = () => {
    setOpenForm(false);
  };

  const confirm = () => {
    const deletedItem: number[] = [];

    contents.forEach((content) => {
      if (content.isChecked) {
        deletedItem.push(content.id);
      }
    });

    dispatch(delCart({ userId: 1, cartIds: deletedItem }));
    setOpenForm(false);
  };

  const changeItem = (index: number, changeAmount: number): void => {
    const temp: ClientCartData[] = [...contents];

    if (temp[index].count + changeAmount < 0) {
      return;
    }

    temp[index].count += changeAmount;

    if (temp[index].count === 0) {
      temp[index].isChecked = false;
    }

    if (temp[index].count !== 0) {
      temp[index].isChecked = true;
    }

    setContents([...temp]);
  };

  return (
    <S.Cart>
      <CartHeader nowStep={ORDER_READY}></CartHeader>
      <div className="cart-side-container">
        <CartContentsContainer
          toggleAllHandler={toggleAllHandler}
          toggleOneHandler={toggleOneHandler}
          deleteCheckedItem={deleteCheckedItem}
          changeItem={changeItem}
          contents={contents}
          metaData={metaData}
        />
        <div className="cart-receipt-side-container">
          <Receipt metaData={metaData} />
        </div>
      </div>
      {isOpenForm && (
        <DeleteModal
          deleteLists={deleteItem}
          contents={contents}
          closeForm={closeForm}
          confirm={confirm}
        />
      )}
    </S.Cart>
  );
}

export default Cart;
