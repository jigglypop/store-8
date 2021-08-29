export type Color = {
  r: number;
  g: number;
  b: number;
};

export const CAPTCHA_LENGTH = 8;
const STRING_BANK =
  '가개갸거게겨고괴괘교구귀궤규그긔기나내냐너네녀노뇌놰뇨누뉘눼뉴느늬니다대댜더데뎌도되돼됴두뒤뒈류드듸디라래랴러레려로뢰뢔료루뤼뤠류르리마매먀머메며모뫼뫠묘무뮈뭬뮤므믜미바배뱌버베벼보뵈봬뵤부뷔붸뷰브븨비사새샤서세셔소쇠쇄쇼수쉬쉐슈브븨비아애야어에여오외왜요우위웨유으의이자재쟈저제져조죄좨죠주쥐줴쥬즈즤지차채챠처체쳐초최쵀쵸추취췌츄츠치카캐캬커케켜코쾨쾌쿄쿠퀴퀘큐크키타태탸터테텨토퇴퇘툐투튀퉤튜트틔티파패퍄퍼페펴포푀표푸퓌퓨프피하해햐허헤혀호회홰효후휘훼휴흐희히';

export function getRandomColor(): Color {
  const color = {
    r: Math.floor(Math.random() * 255),
    g: Math.floor(Math.random() * 255),
    b: Math.floor(Math.random() * 255),
  };
  return color;
}

export function colorToString(color: Color): string {
  return `
    #${color.r.toString(16).padStart(2, '0')}${color.g.toString(16).padStart(2, '0')}${color.b
    .toString(16)
    .padStart(2, '0')}`;
}

// 보색
export function getReverseColor(color: Color): Color {
  const rColor = {
    r: 255 - color.r,
    g: 255 - color.g,
    b: 255 - color.b,
  };
  return rColor;
}

function getOneLetter() {
  const index = Math.floor(Math.random() * STRING_BANK.length);
  return STRING_BANK.charAt(index);
}

export function genKoreanCaptcha(): string {
  let result = '';
  // 모든 한글 문자열을 바탕으로한 RECAPTCHA
  for (let i = 0; i < CAPTCHA_LENGTH; i++) {
    result += getOneLetter();
  }
  return result;
}
