import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { setUser, cleanCheck } from "../module/check";
import { RootState } from "@client/store";
import { logout } from "@client/store/auth/check";
import { HistoryPush } from "@client/utils/router";

export function useCheck () {
    const { check } = useSelector((state: RootState) => state.check);
    const dispatch = useDispatch()
    const onLogout = () => {
        dispatch(logout())
        HistoryPush('main')
    }
    return { check, onLogout };
}