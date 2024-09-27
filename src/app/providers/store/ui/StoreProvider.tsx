import { ReactNode } from "react"
import { Provider } from "react-redux"
import { setupStore } from "./store"
import type { StateSchema } from "./StateSchema"

interface StoreProviderProps {
    children: ReactNode
    initialState?: StateSchema
}

export const StoreProvider = (props: StoreProviderProps) => {

    const {children, initialState} = props

    const store = setupStore(initialState)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}