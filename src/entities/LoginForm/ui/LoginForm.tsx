import { Input } from '@/shared/ui/Input'
import * as styles from './style.module.scss'
import { Button } from '@/shared/ui/Button'
import { useCallback, useState } from 'react'

export const LoginForm = () => {
	const [userName, setUserName] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const onChangeUserName = useCallback(
		(value: string) => {
			setUserName(value)
		},
		[userName]
	)

	const onChangePassword = useCallback(
		(value: string) => {
			setPassword(value)
		},
		[password]
	)

	return (
		<div className={styles['form']}>
			<Input
				value={userName}
				onChange={onChangeUserName}
				label="Username"
				id="username"
				type="text"
			/>
			<Input
				value={password}
				onChange={onChangePassword}
				label="Password"
				id="password"
				type="password"
			/>
			<Button type="submit">Login</Button>
		</div>
	)
}
