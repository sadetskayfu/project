import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { AuthSchema, Error } from '../types/AuthSchema'

const initialState: AuthSchema = {
	email: '',
	password: '',
	isLoading: false,
	error: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// FORM
		setEmail: (state, actions: PayloadAction<string>) => {
			state.email = actions.payload
		},
		setPassword: (state, actions: PayloadAction<string>) => {
			state.password = actions.payload
		},
		// SIGN UP
		signUpPending: (state) => {
			state.error = null
			state.isLoading = true
		},
		signUpSuccess: (state) => {
			state.isLoading = false
			state.email = ''
			state.password = ''
		},
		signUpFailed: (state, action: PayloadAction<Error>) => {
			state.isLoading = false
			state.error = action.payload
			state.password = ''
		},
		// SIGN IN
		signInPending: (state) => {
			state.error = null
			state.isLoading = true
		},
		signInSuccess: (state) => {
			state.isLoading = false
			state.email = ''
			state.password = ''
		},
		signInFailed: (state, action: PayloadAction<Error>) => {
			state.isLoading = false
			state.error = action.payload
			state.password = ''
		},
		// SESSION
		getSessionInfoPending: (state) => {
			state.error = null
			state.isLoading = true
		},
		getSessionInfoSuccess: (state) => {
			state.isLoading = false
		},
		getSessionInfoFailed: (state, action: PayloadAction<Error>) => {
			state.error = action.payload
			state.isLoading = false
		},
		// SIGN OUT
		signOutPending: (state) => {
			state.isLoading = true
			state.error = null
		},
		signOutSuccess: (state) => {
			state.isLoading = false
		},
		signOutFailed: (state, action: PayloadAction<Error>) => {
			state.isLoading = false
			state.error = action.payload
		},
	},
})

export const { actions: authActions } = authSlice
export const { reducer: authReducer } = authSlice
