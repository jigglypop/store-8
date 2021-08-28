import * as S from './style';
import { useRouter } from '@client/hooks/router/router';

interface IProgress {
  progress: number;
}

export default function Progress({ progress }: IProgress) {
  const ratio = -200 + Math.ceil(progress * 2);
  const { router } = useRouter();
  return (
    <>
      {progress !== 101 && (
        <S.Progress ratio={ratio}>
          <div className="progress-inner">
            <h1 className="progress-title">드림 문방구</h1>
            {router.pathname === '' && (
              <div className="img-content">
                <img src={'/public/image/tip/1.png'} />
                <img src={'/public/image/tip/2.png'} />
              </div>
            )}
            {router.pathname === 'main' && (
              <div className="img-content">
                <img src={'/public/image/tip/3.png'} />
                <img src={'/public/image/tip/4.png'} />
              </div>
            )}
            {router.pathname === 'category' && (
              <div className="img-content">
                <img src={'/public/image/tip/5.png'} />
                <img src={'/public/image/tip/6.png'} />
              </div>
            )}

            <div className="progress-bar">
              <div className="progress-color"></div>
              <div className="progress-gray"></div>
            </div>
            <h1 className="progress-number">{(progress - 0.01).toFixed(2).replace('-', '')} %</h1>
          </div>
        </S.Progress>
      )}
    </>
  );
}
