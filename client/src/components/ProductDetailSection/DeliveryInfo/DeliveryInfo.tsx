import { ReactElement } from 'react';
import * as S from './style';

interface Props {}

//TODO: 상수로 빼내기
export default function DeliveryInfo({}: Props): ReactElement {
  return (
    <S.DeliveryInfo>
      <p className="title">배송안내</p>
      <div className="delivery-info__content">
        <p className="subtitle"> · 배송사 : </p>
        <p className="content">CJ대한통운</p>
      </div>
      <div className="delivery-info__content">
        <p className="subtitle"> · 배송비 :</p>
        <div>
          <p className="content">2,500원 (3만원 이상 구매 시 무료배송)</p>
          <p className="content">도서, 산간 일부지역은 배송비가 추가될 수 있습니다. </p>
        </div>
      </div>
      <div className="delivery-info__content">
        <p className="subtitle"> · 배송기간 : </p>
        <p className="content">오후 2시 이전 결제완료시 당일 출고 (영업일 기준)</p>
      </div>
      <p>
        단, 상품의 재고 상황, 배송량, 배송 지역에 따라 배송일이 추가로 소요될 수 있는 점 양해
        부탁드립니다.
      </p>
    </S.DeliveryInfo>
  );
}
