declare global {
  interface Window {
    daum: any;
  }
}

export type AddressResult = {
  address: string;
  zoneCode: string;
};

export const getDaumAddress = (cb: (addressResult: AddressResult) => void) => {
  var themeObj = {
    /* TODO : 색상을 Color Picker와 맞추거나 Dark Mode 설정 하기 */
    //bgColor: "", //바탕 배경색
    searchBgColor: '#0F0F0F', //검색창 배경색
    // contentBgColor: '#2AC1BC', //본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
    // pageBgColor: '#2AC1BC', //페이지 배경색
    // textColor: "", //기본 글자색
    queryTextColor: '#FFFFFF', //검색창 글자색
    // postcodeTextColor: "", //우편번호 글자색
    // emphTextColor: "", //강조 글자색
    // outlineColor: '#2AC1BC', //테두리
  };
  new window.daum.Postcode({
    theme: themeObj,
    oncomplete: function (data: any) {
      console.log(data);
      let address = '';
      let extraAddress = '';
      let zoneCode = data.zonecode;
      if (data.userSelectedType === 'R') {
        address = data.roadAddress;
      } else {
        /* J */
        address = data.jibunAddress;
        if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '' && data.apartment === 'Y') {
          extraAddress += extraAddress !== '' ? ', ' + data.buildingName : data.buildingName;
        }
        if (extraAddress !== '') {
          extraAddress = ' (' + extraAddress + ')';
        }
      }
      cb({ address, zoneCode });
    },
  }).open();
};
