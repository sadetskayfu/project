import type { AppThunk } from "@/app/providers/store/config/store";
import { authActions } from "../../../slice/authSlice";
import { AuthData } from "../../api/authApi";
import { getSessionInfoThunk } from "../getSessionInfoThunk/getSessionInfoThunk";

export const signUpThunk = (authData: AuthData): AppThunk => (dispatch, getState, { authApi }) => {
    dispatch(authActions.signUpPending())

    authApi.signUp(authData).then(() => {
        dispatch(authActions.signUpSuccess()) 
        dispatch(getSessionInfoThunk())
    }).catch((error) => {
        dispatch(authActions.signUpFailed(error.response?.data))
    })
}