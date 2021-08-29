import * as S from './style';
import { ChangeEvent, useEffect, useState } from 'react';
import { Link } from '../../utils/router';
import { GITHUB_URL } from '@client/constants/server_url';
import MainSvg from '@image/svg/mainHorizontal.svg';
import { validate } from '@client/utils/validate';

interface IAuthForm {
  types: 'login' | 'register';
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: any) => void;
  error: string | null;
  loading: boolean;
}

interface ITextItem {
  logo: string;
  goto: string;
  link: string;
  where: string;
}

interface ITextMap {
  login: ITextItem;
  register: ITextItem;
}

const Auth = ({ types, error, onChange, onSubmit }: IAuthForm) => {
  const textMap: ITextMap = {
    login: {
      logo: '로그인',
      goto: '처음 방문하셨나요?',
      link: '/register',
      where: '회원가입',
    },
    register: {
      logo: '회원가입',
      goto: '이미 아이디가 있으신가요?',
      link: '/login',
      where: '로그인',
    },
  };
  const text = textMap[types];
  const [usernameError, setUsernameError] = useState(
    '유저 이름은 2자 이상 16자 이하로 입력해야 합니다.'
  );
  const [emailError, setEmailError] = useState('이메일의 형식이 맞지 않습니다.');
  const [passwordError, setPasswordError] = useState(
    '비밀번호는 8자 이상 16자 이하로 입력해야 합니다.'
  );
  const [disable, setDisable] = useState(false);

  const onChangeUsername = (name: string, e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    const { error } = validate(name, e.target.value);
    setUsernameError(error);
  };
  const onChangeEmail = (name: string, e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    const { error } = validate(name, e.target.value);
    setEmailError(error);
  };
  const onChangePassword = (name: string, e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    const { error } = validate(name, e.target.value);
    setPasswordError(error);
  };

  useEffect(() => {
    if (types === 'login') {
      if (emailError === '' && passwordError === '') {
        setDisable(true);
      } else {
        setDisable(false);
      }
    } else {
      if (usernameError === '' && emailError === '' && passwordError === '') {
        setDisable(true);
      } else {
        setDisable(false);
      }
    }
  }, [usernameError, emailError, passwordError]);
  return (
    <S.Auth>
      <S.AuthForm>
        <S.LogoText>
          <MainSvg />
        </S.LogoText>
        <div className="auth-title">{text.logo}</div>

        <S.Input>
          <input
            name="email"
            placeholder="이메일"
            onChange={(e) => onChangeEmail('email', e)}
            type="email"
          />
        </S.Input>
        <div className="error-msg">
          <h4>{emailError}</h4>
        </div>
        {types === 'register' && (
          <>
            <S.Input>
              <input
                autoComplete="username"
                name="username"
                placeholder="닉네임 (2자 ~ 16자)"
                onChange={(e) => onChangeUsername('username', e)}
              />
            </S.Input>

            <div className="error-msg">
              <h4>{usernameError}</h4>
            </div>
          </>
        )}
        <S.Input>
          <input
            autoComplete="password"
            name="password"
            placeholder="비밀번호 (8자 ~ 16자)"
            type="password"
            onChange={(e) => onChangePassword('password', e)}
          />
        </S.Input>

        <div className="error-msg">
          <h4>{passwordError}</h4>
        </div>

        <S.Error>
          <h3>{error}</h3>
        </S.Error>
        <Link to={text.link} className="text-goto">
          <h4>
            {text.goto} <span>{text.where}</span>
          </h4>
        </Link>
        <S.FormButton onClick={onSubmit} disabled={!disable}>
          <h4>{text.logo}</h4>
        </S.FormButton>
        <a href={`${GITHUB_URL}`}>
          <S.GitHub className="github-button">GITHUB 로그인/ 회원가입</S.GitHub>
        </a>
      </S.AuthForm>
    </S.Auth>
  );
};

export default Auth;
