import { createSlice } from '@reduxjs/toolkit'
import { ProfileSchema } from '../types/ProfileSchema'

const initialState: ProfileSchema = {
    name: 'yarik'
}

const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
        setName: (state) => {
            state.name = 'loh'
        }
    },
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
