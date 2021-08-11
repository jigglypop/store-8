
import { SERVER_URL } from "../constants/server_url"
import { IRegisterForm } from "../store/register/type"
import { createToast } from "../utils/createToast"

interface IThunkApi {
    rejectWithValue: (error: string) => void
}

// 회원가입
export const registerApi = async (registerform: IRegisterForm, thunkApi: IThunkApi) => {
    const res = await fetch(`${SERVER_URL}/api/auth/register`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "user": registerform
        }),
    })
    if (res.status !== 200){
        const error = await res.json()
        return await thunkApi.rejectWithValue(error)
    }
    createToast("회원 가입")
    return await res.json()
}

// // 로그인
// export const loginApi  = async (login: ILoginForm, thunkAPI: any) => {
//     const res : any = await fetch(`${SERVER_URL}/api/auth/login`,{
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             "user": login
//         }),
//     })
//     if (res.status !== 200){
//         const error = await res.json()
//         return await thunkAPI.rejectWithValue(error)
//     }
//     createToast("로그인")
//     return await res.json()
// }
// 
// // 체크
// export const checkApi  = async (token: string, thunkAPI: any) => {
//     const res : any = await fetch(`${SERVER_URL}/api/auth/check`,{
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization":`${token}`
//         },
//     })
//     if (res.status !== 200){
//         const error = await res.json()
//         return await thunkAPI.rejectWithValue(error)
//     }
//     return await res.json()
// }