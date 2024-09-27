import { configureStore, UnknownAction, ThunkAction, ReducersMapObject } from "@reduxjs/toolkit";
import type { StateSchema } from "./StateSchema";
import { authReducer } from "@/features/auth/ui/model/slice/authSlice";

export const extraArgument = {
    
}

export function setupStore(initialState?: StateSchema) {

    const rootReducer: ReducersMapObject<StateSchema> = {
        auth: authReducer
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
