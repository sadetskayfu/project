import { Input } from '@/shared/ui/Input'
import { Button } from '@/shared/ui/Button'
import { useCallback } from 'react'
import { authActions } from '../model/slice/authSlice'
import { getPassword, getUsername } from '../model/selectors/selectors'
import { useSelector } from 'react-redux'
import { loginByUsername } from '../model/services/loginByUsername'
import { useAppDispatch } from '@/app/providers/store'
import * as styles from './style.module.scss'

export const SingInForm = () => {

    const dispatch = useAppDispatch()
	const username = useSelector(getUsername)
	const password = useSelector(getPassword)

	const onChangeUserName = useCallback(
		(value: string) => {
			dispatch(authActions.setUsername(value))
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
		dispatch(loginByUsername({
			password,
			username
		}))
	}

	return (
		<form className={styles['form']}>
			<Input
				value={username}
				onChange={onChangeUserName}
				label="Username"
				id="username"
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
