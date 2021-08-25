import * as S from './style';

const PrivatePage = () => {
  return (
    <S.PrivatePage>
      <p className="usage-header">{'드림 문방구 개인정보 처리방침'}</p>
      <p className="usage-subheader">{'1. 개인정보 취급방침'}</p>
      <p className="usage-plain">
        {
          '· 서비스의 원활한 제공을 위하여 회원이 동의한 목적과 범위 내에서만 개인정보를 수집.이용하며, 개인정보 보호 관련 법령에 따라 안전하게 관리합니다'
        }
      </p>
      <p className="usage-plain">{'· 제출한 모든 개인정보 일체는 암호화되어 보관됩니다.'}</p>
      <p className="usage-plain">
        {'· 또한 제출한 모든 개인정보 일체는 요청에 의해 언제든지 파기가 가능합니다.'}
      </p>
    </S.PrivatePage>
  );
};

export default PrivatePage;
