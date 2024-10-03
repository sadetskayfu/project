import { FC, ReactNode, useEffect } from "react";
import { reducerManager, StateSchemaKey } from "@/app/providers/store";
import { Reducer } from "@reduxjs/toolkit";

interface WithLazyReducersProps {
    children: ReactNode
    name: StateSchemaKey
    reducer: Reducer
    removeAfterUnmount?: boolean
}

export const WithLazyReducers: FC<WithLazyReducersProps> = (props) => {

    const { children, name, reducer, removeAfterUnmount = false } = props

    useEffect(() => {
        reducerManager.add(name, reducer)
        
        return () => {
            if(removeAfterUnmount) {
                reducerManager.remove(name)
            }
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
}