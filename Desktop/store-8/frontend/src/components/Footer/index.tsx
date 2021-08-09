import * as S from "./style";

export const footerTop = [
  "공지사항",
  "1:1문의",
  "이용약관",
  "개인정보처리방침",
  "판매처 안내",
];
export const footerBottom = [
  [
    "상호 : (주)우아한형제들",
    "대표 : 김범준",
    "사업자등록번호 : 120-87-65763",
    "통신판매업신고번호 : 2012-서울송파-0515",
    "[사업자정보확인]",
  ],
  [
    "대표번호 : 1670-9902",
    "배민문방구 고객센터(1670-9902) 운영시간 : 월-금 13:00~18:00(주말•공휴일 휴무)",
  ],
  [
    "팩스번호 : 050-605-0041",
    "메일 : baemin_store@woowahan.com",
    "배민문방구 인스타그램 : @baemin_store",
  ],
  [
    "주소 : 서울특별시 송파구 위례성대로 2 장은빌딩",
    "호스팅제공 : 엔에이치엔고도(주)",
  ],
  ["© Woowa Brothers Corp. All right Reserved"],
];
const Footer = () => {
  return (
    <S.Footer>
      <div className="footerInner">
        <div className="footerWrap">
          <div className="footerLogo">
            <img src="image/footer.png" />
          </div>
          <div className="footerText">
            <div className="footerTextTop">
              {footerTop.map((item: string, index: number) => (
                <div key={index}>{item}</div>
              ))}
            </div>
            <div className="footerTextBottom">
              {footerBottom.map((items: string[], index: number) => (
                <div key={index} className="footer-text-bottom-item">
                  {items.map((item: string, index: number) => (
                    <div key={index}>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </S.Footer>
  );
};

export default Footer;
