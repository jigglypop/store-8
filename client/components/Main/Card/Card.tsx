import { Link } from "@client/utils/router";
import { dot } from "../../../utils/dot";
import * as S from "./style";

export interface ICardItem {
  sale: number;
  title: string;
  amount: number;
  tagType: number;
}

interface ICard {
  index: number;
  item: ICardItem;
}
const Card = ({ index, item }: ICard) => {
  return (
    <S.Card>
      <div className="cardInner">
        <div className="image">
          <Link to={`/product/${index + 1}?id=1&value=hello`} >
            <img src={`public/image/mainc/mainc${index + 1}.jpg`} alt="title" />
          </Link>
          <div className="underbutton">
            <button className="smallbutton">
              <i className="far fa-heart"></i>
            </button>
            <button className="smallbutton">
              <i className="fas fa-cart-plus"></i>
            </button>
          </div>
        </div>
        <div className="text">
          <p className="red">
            {item.sale !== 1 ? Math.ceil(item.sale * 100) + "%" : ""}
          </p>
          <p className="large">{item.title}</p>
          <p className="line">
            {item.sale !== 1
              ? dot(Math.ceil(item.amount * (1 - item.sale))) + "원"
              : ""}
          </p>
          <p className="small">{dot(item.amount)} 원</p>
        </div>

        <div className="mark">
          {item.tagType === 1 ? (
            <button className="green">
              <p className="marktext">GREEN</p>
            </button>
          ) : (
            ""
          )}
          {item.tagType <= 1 ? (
            <button className="new">
              <p className="marktext">NEW</p>
            </button>
          ) : (
            ""
          )}
          {item.tagType === 0 ? (
            <button className="sale">
              <p className="marktext">SALE</p>
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </S.Card>
  );
};

export default Card;
