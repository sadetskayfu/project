import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
import { useCallback, useEffect } from 'react'
import { authActions } from '../../model/slice/authSlice'
import { getPassword, getEmail } from '../../model/selectors/selectors'
import { useSelector } from 'react-redux'
import { signUpThunk } from '../../model/services/thunk/signUpThunk/signUpThunk'
import { useAppDispatch } from '@/shared/hooks/redux'
import * as styles from './style.module.scss'

export const SignUpForm = () => {

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

	console.log('sign-in')

	return (
		<form className={styles['form']}>
			<Input
				value={email}
				onChange={onChangeEmail}
				label="Email"
				id="email"
				type="text"
				autoCapitalize='off'
			/>
			<Input
				value={password}
				onChange={onChangePassword}
				label="Password"
				id="password"
				type="password"
				autoCapitalize='off'
			/>
			<Button onClick={onLogin} type='button' additionalClasses={[styles['button']]}>Sign up</Button>
		</form>
	)
}
