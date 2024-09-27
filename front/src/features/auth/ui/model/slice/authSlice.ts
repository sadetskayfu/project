import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AuthSchema } from '../types/authSchema'
import { loginByUsername } from '../services/loginByUsername'

const initialState: AuthSchema = {
	username: '',
	password: '',
	isLoading: false,
	error: '',
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUsername: (state, actions: PayloadAction<string>) => {
			state.username = actions.payload
		},
		setPassword: (state, actions: PayloadAction<string>) => {
			state.password = actions.payload
		},
	},

	extraReducers: (builder) => {
		builder.addCase(loginByUsername.pending, (state) => {
			state.error = ''
			state.isLoading = true
		}),
		builder.addCase(loginByUsername.fulfilled, (state) => {
			state.error = ''
			state.isLoading = false
		}),
		builder.addCase(loginByUsername.rejected, (state, action) => {
			state.isLoading = false
			state.error = action.payload as string
		})
	}
})

export const { actions: authActions } = authSlice
export const { reducer: authReducer } = authSlice
