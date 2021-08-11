import { ReactElement } from 'react';
import * as S from './style';

interface Props {}

//TODO: 상수로 빼내기
export default function DeliveryInfo({}: Props): ReactElement {
  return (
    <S.DeliveryInfo>
      <div className="title">배송안내</div>
      <div className="delivery-info__content">
        <div className="subtitle"> · 배송사 : </div>
        <div className="content">CJ대한통운</div>
      </div>
      <div className="delivery-info__content">
        <div className="subtitle"> · 배송비 :</div>
        <div>
          <div className="content">2,500원 (3만원 이상 구매 시 무료배송)</div>
          <div className="content">도서, 산간 일부지역은 배송비가 추가될 수 있습니다. </div>
        </div>
      </div>
      <div className="delivery-info__content">
        <div className="subtitle"> · 배송기간 : </div>
        <div className="content">오후 2시 이전 결제완료시 당일 출고 (영업일 기준)</div>
      </div>
      <div>
        단, 상품의 재고 상황, 배송량, 배송 지역에 따라 배송일이 추가로 소요될 수 있는 점 양해
        부탁드립니다.
      </div>
    </S.DeliveryInfo>
  );
}
