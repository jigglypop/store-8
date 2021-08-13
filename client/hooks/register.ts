import { useSelector, useDispatch } from "react-redux";
import { useEffect, ChangeEvent } from "react";
import { changeRegister, postRegister, initRegister } from "../store/auth/register";
import { RootState } from "@client/store";
import { HistoryPush } from "@client/utils/router";
import { getCheck } from "@client/store/auth/check";
import cache from "@client/utils/cache";
import { IRegisterReq } from "@middle/type/auth/register";
import _ from 'lodash';

export function useRegister () {
    const { registerform, register, error, loading } = useSelector((state: RootState) => state.register);
    const dispatch = useDispatch();
    
    // 인풋 박스 디바운싱
    let timer: NodeJS.Timeout
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name: keyof IRegisterReq = e.target.name
        const value =  e.target.value
        if (timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            dispatch(changeRegister({ key: name, value: value }))
        }, 200);
    }


    const onSubmit = async (e: { preventDefault: () => void; }) =>{
        e.preventDefault();
        await dispatch(postRegister(registerform))
    }

    // 회원가입 후 성공 user 로컬스토리지 저장, 체크
    useEffect( ()=>{
        if (register) {
            HistoryPush('main')
            dispatch(getCheck(cache.get('token')))
            dispatch(initRegister())
        }
    }, [register])

    // 생명주기(뒷정리)
    useEffect(() => {
        return ()=>{
            dispatch(initRegister())
        }
    }, [])
    
    return { register, error, loading, onChange, onSubmit };
}