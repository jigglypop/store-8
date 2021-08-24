import * as S from './style';

const UsagePage = () => {
  return (
    <S.UsagePage>
      <p className="usage-header">{'드림 문방구 이용약관'}</p>
      <p className="usage-subheader">{'1. 소유권'}</p>
      <p className="usage-plain">
        {'· 사용된 데이터 일체의 저작권, 소유권은 (주) 우아한형제들에 속해있습니다.'}
      </p>
      <p className="usage-plain">
        {
          '· 개인적인 목적으로 데이터를 다운받거나 상업적인 목적으로 사용한다면 우아한 형제들이 혼내줍니다.'
        }
      </p>
      <div className="text-feilds">
        <p className="usage-plain">{'· 이외의 저희의 코드가 궁금하시다면 '}</p>
        <a className="usage-plain" href={'https://github.com/woowa-techcamp-2021/store-8'}>
          {' 링크 '}
        </a>
        <p className="usage-plain">{' 에서 확인 가능합니다.'}</p>
      </div>
    </S.UsagePage>
  );
};

export default UsagePage;
