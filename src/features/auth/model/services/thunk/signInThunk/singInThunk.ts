import type { AppThunk } from "@/app/providers/store/config/store";
import { authActions } from "../../../slice/authSlice";
import { AuthData } from "../../api/authApi";
import { getSessionInfoThunk } from "../getSessionInfoThunk/getSessionInfoThunk";

export const signInThunk = (authData: AuthData): AppThunk => (dispatch, getState, { authApi }) => {
    dispatch(authActions.signInPending())

    authApi.signIn(authData).then(() => {
        dispatch(authActions.signInSuccess()) 
        dispatch(getSessionInfoThunk())
    }).catch((error) => {
        dispatch(authActions.signInFailed(error.response?.data))
    })
}