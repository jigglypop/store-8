import {
  ReactElement,
  useEffect,
  useState,
  useRef,
  MouseEvent,
  SetStateAction,
  Dispatch,
} from 'react';
import * as S from './style';

import RegenIcon from '@image/svg/regen.svg';

import {
  getRandomColor,
  colorToString,
  getReverseColor,
  genKoreanCaptcha,
  CAPTCHA_LENGTH,
} from '@utils/captcha';

interface CaptchaProps {
  width?: number;
  height?: number;
  checkCaptcha: Dispatch<SetStateAction<boolean>>;
}

const Captcha = (props: CaptchaProps): ReactElement => {
  const WIDTH = props.width ? props.width : 200;
  const HEIGHT = props.height ? props.height : 34;
  const [captchaCode, setCode] = useState('');
  const [typeCaptcha, setTypedCode] = useState('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    setCode(loadCaptcha(canvasRef.current, WIDTH, HEIGHT));
  }, [canvasRef.current]);

  const isSameCaptcha = (code: string) => {
    return code === captchaCode;
  };

  const AlertItem = () => {
    if (typeCaptcha.length === 0) {
      return <p className="success-text"></p>;
    }
    if (!isSameCaptcha(typeCaptcha)) {
      return <p className="alert-text">{'입력한 문구가 동일하지 않습니다.'}</p>;
    } else {
      return <p className="success-text">{'입력한 문구가 동일합니다.'}</p>;
    }
  };

  return (
    <S.Captcha>
      <div className="canvas-container">
        <canvas ref={canvasRef} id="captcha-canvas" />
        <button
          onClick={(e: MouseEvent) => {
            e.preventDefault();
            if (canvasRef.current) {
              setCode(loadCaptcha(canvasRef.current, WIDTH, HEIGHT));
            }
          }}
        >
          <RegenIcon className="button-svg" />
        </button>
      </div>
      <div className="captcha-input">
        <input
          placeholder={'글자를 보이는대로 입력하세요.'}
          onChange={(e) => {
            setTypedCode(e.target.value);
            props.checkCaptcha(isSameCaptcha(e.target.value));
          }}
        />
        {AlertItem()}
      </div>
    </S.Captcha>
  );
};

export default Captcha;

function genRandomFontSize(fontType: string = 'Black Han Sans') {
  const randomSize = [16, 18, 20, 22, 24];
  const index = Math.floor(Math.random() * randomSize.length);
  return {
    fontStyle: `${randomSize[index]}px ${fontType}`,
    fontSize: randomSize[index],
  };
}

function gradientFilter(
  ctx: CanvasRenderingContext2D,
  colorBreakLocation: number,
  width: number,
  height: number
) {
  let backgroundGradient = ctx.createLinearGradient(0, 0, width, 0);
  const baseColor = getRandomColor();
  const backgroundStartColor = colorToString(baseColor);
  const backgroundEndColor = colorToString(getReverseColor(baseColor));
  backgroundGradient.addColorStop(0, backgroundStartColor);
  backgroundGradient.addColorStop(1, backgroundEndColor);

  ctx.fillStyle = backgroundGradient;
  ctx.fillRect(0, 0, width, height);

  let reverseBackgroundGradient = ctx.createLinearGradient(0, 0, width, 0);
  reverseBackgroundGradient.addColorStop(colorBreakLocation, backgroundEndColor);
  reverseBackgroundGradient.addColorStop(colorBreakLocation, backgroundStartColor);
  return reverseBackgroundGradient;
}

function loadCaptcha($canvasText: HTMLCanvasElement, width: number, height: number): string {
  const captchaCode = genKoreanCaptcha();
  const ctx = $canvasText.getContext('2d');
  if (!ctx) return '';

  // Size 정의
  $canvasText.width = width;
  $canvasText.height = height;

  const fontStyleList = [];
  let total = 0;
  let colorBreakLocation = 0;

  // 글자와 글자 스타일을 작성
  for (let i = 0; i < CAPTCHA_LENGTH; i++) {
    const tempStyle = genRandomFontSize();
    fontStyleList.push(tempStyle);
    total += tempStyle.fontSize;
    if (i < CAPTCHA_LENGTH / 2) {
      colorBreakLocation += tempStyle.fontSize;
    }
  }

  let before = Math.floor((width - total) / 2);
  colorBreakLocation += before;

  // 여러 filter를 Random하게 작성 - 글자 중간부터 색을 변경한다.
  let reverseBackgroundGradient = gradientFilter(ctx, colorBreakLocation / width, width, height);

  ctx.fillStyle = reverseBackgroundGradient;

  for (let i = 0; i < CAPTCHA_LENGTH; i++) {
    const { fontStyle, fontSize } = fontStyleList[i];
    ctx.font = fontStyle;
    ctx.fillText(captchaCode.charAt(i), before, 28);
    before += fontSize;
  }

  return captchaCode;
}
