import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserAuthInfo, UserSchema } from '../types/UserSchema'

const initialState: UserSchema = {
	authInfo: null
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserAuthInfo>) => {
            state.authInfo = action.payload
        },

		removeUser: (state) => {
			state.authInfo = null
		},
	},
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
