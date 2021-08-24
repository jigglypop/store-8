import { ReactElement, useState } from 'react';
import * as S from './style';
import { CHOOSE_OPTION_TEXT } from '@constants/Order';
import Modal from '@client/components/common/Modal/Modal';
import Option from './Option';
import numUp from '@image/numUp.png';
import numDown from '@image/numDown.png';
import { kstFormatter } from '@utils/utils';
import { useEffect } from 'react';
import { useOption } from '@client/hooks/product/option';

interface OptionModalProps {
  productId: number;
  closeForm: () => void;
  confirm: (optionId: number | null, count: number) => void;
}

function AddressModal(props: OptionModalProps): ReactElement {
  const { getOptions, options } = useOption();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getOptions(props.productId);
  }, []);

  useEffect(() => {
    console.log(options);
  }, [options]);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const onSubmit = () => {
    if (options.options.length === 0) {
      props.confirm(null, count);
    } else {
      props.confirm(options.optionIds[selectedIndex], count);
    }
  };

  return (
    <Modal closeModal={props.closeForm}>
      <S.OptionModal>
        <div>
          <p className="option-modal-title">{`${options.title} ( ${kstFormatter(
            options.amount
          )} ) 를 장바구니에 추가합니다.`}</p>
          <div className="product-count-header">
            <p className="option-subtitle">{CHOOSE_OPTION_TEXT}</p>
            <div className="product-count-container">
              <img onClick={decrease} className="num-scaler" src={numDown} />
              <p>{count}</p>
              <img onClick={increase} className="num-scaler" src={numUp} />
            </div>
          </div>
          <div className="option-container">
            {options.options.map((element, index) => {
              return (
                <div className="option-div" key={index} onClick={() => setSelectedIndex(index)}>
                  <Option title={element} selected={selectedIndex === index} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="button-space">
          <button onClick={props.closeForm} className="cancle-btn">
            {'취소'}
          </button>
          <button onClick={onSubmit} className="submit-btn">
            {'선택'}
          </button>
        </div>
      </S.OptionModal>
    </Modal>
  );
}

export default AddressModal;
