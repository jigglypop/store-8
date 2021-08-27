import * as S from './style';

interface IProgress {
  progress: number;
}

export default function Progress({ progress }: IProgress) {
  const ratio = -200 + Math.ceil(progress * 2);
  return (
    <>
      {progress !== 101 && (
        <S.Progress ratio={ratio}>
          <div className="progress-inner">
            <h1 className="progress-title">드림 문방구</h1>
            <h1 className="progress-text">드림 문방구 준비중</h1>
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
