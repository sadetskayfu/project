import { memo, useState } from 'react'
import { SignInForm } from '../SignInForm/SignInForm'
import { SignUpForm } from '../SignUpForm/SignUpForm'
import { Button } from '@/shared/ui/Button'
import { classNames } from '@/shared/lib'
import * as styles from './style.module.scss'

export const Auth = memo(() => {
	const [currentForm, setCurrentForm] = useState<boolean>(false)

	const toggleForm = () => {
		setCurrentForm(!currentForm)
	}

	const mods: Record<string, boolean> = {
		[styles['active']]: currentForm,
	}

	console.log('auth')

	return (
		<div className={styles['auth']}>
			<div className={classNames(styles['sign-up'], [], mods)}>
				{!currentForm ? (
					<div className={styles['form']}>
						<h3 className={styles['form__title']}>Sign up</h3>
						<SignUpForm />
					</div>
				) : (
					<div className={styles['preview']}>
						<h3 className={styles['preview__title']}>
							Don't you have an account?
						</h3>
						<p className={styles['preview__desc']}>
							If you don't have an account, you can create one
						</p>
						<Button
							additionalClasses={[styles['preview__button']]}
							onClick={toggleForm}
							theme="transparent"
						>
							Sign up
						</Button>
					</div>
				)}
			</div>

			<div className={classNames(styles['sign-in'], [], mods)}>
				{currentForm ? (
					<div className={styles['form']}>
						<h3 className={styles['form__title']}>Sign in</h3>
						<SignInForm />
					</div>
				) : (
					<div className={styles['preview']}>
						<h3 className={styles['preview__title']}>
							Already have an account?
						</h3>
						<p className={styles['preview__desc']}>
							If you already have an account, you can log in
						</p>
						<Button
							additionalClasses={[styles['preview__button']]}
							onClick={toggleForm}
							theme="transparent"
						>
							Sign in
						</Button>
					</div>
				)}
			</div>
		</div>
	)
})
