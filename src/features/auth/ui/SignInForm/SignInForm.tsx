import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
import { useCallback } from 'react'
import { authActions } from '../model/slice/authSlice'
import { getPassword, getEmail } from '../model/selectors/selectors'
import { useSelector } from 'react-redux'
import { signUpThunk } from '../model/services/thunk/signUpThunk/signUpThunk'
import { useAppDispatch } from '@/app/providers/store'
import * as styles from './style.module.scss'

export const SignInForm = () => {

    const dispatch = useAppDispatch()
	const email = useSelector(getEmail)
	const password = useSelector(getPassword)

	const onChangeEmail = useCallback(
		(value: string) => {
			dispatch(authActions.setEmail(value))
		},
		[dispatch]
	)

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(authActions.setPassword(value))
		},
		[dispatch]
	)

	const onLogin = () => {
		dispatch(signUpThunk({
			email,
			password
		}))
	}

	return (
		<form className={styles['form']}>
			<Input
				value={email}
				onChange={onChangeEmail}
				label="Email"
				id="email"
				type="text"
                placeholder='hello'
                labelTheme='label-none'
			/>
			<Input
				value={password}
				onChange={onChangePassword}
				label="Password"
				id="password"
				type="password"
			/>
			<Button onClick={onLogin} type='button'>Login</Button>
		</form>
	)
}
