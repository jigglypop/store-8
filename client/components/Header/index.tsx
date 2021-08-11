import { headerBottom, headerTop } from "./headerConstant";
import HeaderItem from "./HeaderItem";
import { Link } from "../../utils/router";
import * as S from "./style";
import { useRef } from "react";

const Header = () => {
  const header = useRef<HTMLDivElement>(null);
  window.addEventListener("scroll", () => {
    if (header.current) {
      if (window.scrollY >= 60) {
        header.current.classList.add("up");
      } else {
        header.current.classList.remove("up");
      }
    }
  });
  return (
    <S.Header>
      <div className="headerInner" ref={header}>
        <div className="top">
          {headerTop.map((item: string, index: number) => (
            <HeaderItem key={index} item={item} />
          ))}
        </div>
        <div className="mid">
          <Link to="/">
            <img src="public/image/main.png" />
          </Link>
        </div>
        <div className="bottom">
          {headerBottom.map((item: string, index: number) => (
            <HeaderItem key={index} item={item} />
          ))}
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
