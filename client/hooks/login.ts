import { useSelector, useDispatch } from "react-redux";
import { useEffect, ChangeEvent } from "react";
import { changeLogin, postLogin, initLogin, ILoginInput } from "../store/auth/login";
import { RootState } from "@client/store";
import { HistoryPush } from "@client/utils/router";
import cache from "@client/utils/cache";
import { getCheck } from "@client/store/auth/check";
import { ILoginReq } from "@middle/type/auth/login";

export function useLogin () {
    const { loginform, login, error, loading } = useSelector((state: RootState) => state.login);
    const dispatch = useDispatch();
    
    // 인풋 박스 디바운싱
    let timer: NodeJS.Timeout
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name: keyof ILoginReq = e.target.name
        const value =  e.target.value
        if (timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            dispatch(changeLogin({ key: name, value: value }))
        }, 300);
    }

    const onSubmit = async (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        await dispatch(postLogin(loginform))
    }

    // 로그인 후 성공 user 로컬스토리지 저장, 체크
    useEffect( ()=>{
        if (login) {
            HistoryPush('main')
            dispatch(getCheck(cache.get('token')))
            dispatch(initLogin())
        }
    }, [login])

    // 생명주기(뒷정리)
    useEffect(() => {
        return ()=>{
            dispatch(initLogin())
        }
    }, [])
    
    return { login, error, loading, onChange, onSubmit };
}