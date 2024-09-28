import { configureStore, UnknownAction, ThunkAction, ReducersMapObject } from "@reduxjs/toolkit";
import type { StateSchema } from "./StateSchema";
import { authReducer } from "@/features/auth";
import { userReducer } from "@/entities/User";
import { authApi } from "@/features/auth/ui/model/services/api/authApi";

export const extraArgument = {
    authApi
}

export function setupStore(initialState?: StateSchema) {

    const rootReducer: ReducersMapObject<StateSchema> = {
        auth: authReducer,
        user: userReducer
    }

    return configureStore<StateSchema>({
        reducer: rootReducer,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument
            }
        })
    })
}

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<R = void> = ThunkAction<
	R,
	StateSchema,
	typeof extraArgument,
	UnknownAction
>
