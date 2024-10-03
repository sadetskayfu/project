import type { AppThunk } from "@/app/providers/store/config/store";
import { authActions } from "../../../slice/authSlice";
import { userActions } from "@/entities/User";


export const signOutThunk = (): AppThunk => (dispatch, getState, { authApi }) => {
    dispatch(authActions.signOutPending())

    authApi.signOut().then(() => {
        dispatch(authActions.signOutSuccess())
        dispatch(userActions.removeUser())
    }).catch((error) => {
        dispatch(authActions.signOutFailed(error.response?.data))
    })
}