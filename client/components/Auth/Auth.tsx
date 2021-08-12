import * as S from "./style";
import { ChangeEvent } from 'react';
import { Link } from '../../utils/router';
import { Input } from "../common/input/Input";
import { GITHUB_URL } from "@client/constants/server_url";

interface IAuthForm {
    types: 'login' | 'register'
    onChange: (event: ChangeEvent<HTMLInputElement>)=> void,
    onSubmit: (e:any) => void,
    error: string | null,
    loading: boolean
}

interface ITextItem {
    logo: string;
    goto: string;
    link: string;
}

interface ITextMap {
    login: ITextItem;
    register: ITextItem;
}

const Auth = ({ types, error, onChange, onSubmit }: IAuthForm) =>{
    const textMap: ITextMap = {
        login : {
            logo: '로그인',
            goto: '처음 방문하셨나요? 회원가입',
            link: '/register'
        },
        register : {
            logo : '회원가입',
            goto: '이미 아이디가 있으신가요? 로그인',
            link: '/login'
        }
    }
    const text = textMap[types]
    return (
        <S.Auth>
            <S.AuthForm>
                <S.LogoText>배민 문방구</S.LogoText>
                <h1>{text.logo}</h1>
                <Input>
                    <input 
                        name="username" placeholder="아이디" 
                        onChange={(e)=> onChange(e)}/>
                </Input>
                {types === 'register' && (                
                    <Input>
                        <input 
                            autoComplete="email" name="email" 
                            placeholder="이메일" 
                            onChange={(e)=> onChange(e)}/>
                    </Input>
                )}
                <Input>
                    <input 
                        autoComplete="password" name="password" placeholder="비밀번호" 
                        type="password" onChange={(e)=> onChange(e)}/>
                </Input>
                <S.Error><h3>{error}</h3></S.Error>
                <h5><Link to={text.link} ><h4>{text.goto}</h4></Link></h5>
                <S.FormButton onClick={onSubmit}><h4>{text.logo}</h4></S.FormButton>
                <a href={`${GITHUB_URL}`}>
                    <S.GitHub className="github-button" >GITHUB 로그인/ 회원가입 </S.GitHub>
                </a>
            </S.AuthForm>
        </S.Auth>)
}

export default Auth