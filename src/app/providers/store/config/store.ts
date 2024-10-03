import { configureStore, UnknownAction, ThunkAction, ReducersMapObject, EnhancedStore } from "@reduxjs/toolkit";
import type { StateSchema } from "./types";
import { authReducer } from "@/features/auth";
import { userReducer } from "@/entities/User";
import { authApi } from "@/features/auth/model/services/api/authApi";
import { createReducerManager } from "./reducerManager";

export const extraArgument = {
    authApi
}

const staticReducer: ReducersMapObject<StateSchema> = {
    auth: authReducer,
    user: userReducer
}

export const reducerManager = createReducerManager(staticReducer)

export function setupStore(initialState?: StateSchema) {
    
    const store = configureStore<StateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument
            }
        })
    })

    return store
}

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<R = void> = ThunkAction<
	R,
	StateSchema,
	typeof extraArgument,
	UnknownAction
>
