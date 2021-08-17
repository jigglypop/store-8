
import { BASE_URL, SERVER_URL } from "../constants/server_url"
import request, { IThunkApi } from "./utils/request";

// 카테고리 가져오기

export const getCategoryApi = async (query: string, thunkApi: IThunkApi) => {
    const data = await request.get("/api/category" + query);
    if (data.status !== 200){
        const error = data.message
        return await thunkApi.rejectWithValue(error)
    }
    return await data.data
}
