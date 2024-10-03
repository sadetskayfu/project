import type { AppThunk } from "@/app/providers/store/config/store";
import { authActions } from "../../../slice/authSlice";
import { userActions } from "@/entities/User";

export const getSessionInfoThunk = (): AppThunk => (dispatch, getState, {authApi}) => {
    dispatch(authActions.getSessionInfoPending())

    authApi.getSessionInfo().then((res) => {
        dispatch(userActions.setUser({email: res.email}))
        dispatch(authActions.getSessionInfoSuccess())
    }).catch((error) => {
        dispatch(authActions.getSessionInfoFailed(error.response?.data))
    })
}