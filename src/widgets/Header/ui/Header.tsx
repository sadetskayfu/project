import { useCallback, useState } from 'react'
import { TranslateSwitchButton } from '@/shared/ui/TranslateSwitchButton'
import './style.scss'
import { ThemeSwitchButton } from '@/shared/ui/ThemeSwitchButton'
import { Button } from '@/shared/ui/Button'
import { Modal } from '@/widgets/Modal'
import { useAppDispatch } from '@/shared/hooks/redux'
import { useSelector } from 'react-redux'
import { Auth, signOutThunk } from '@/features/auth'
import { getUserEmail } from '@/entities/User'

export const Header = () => {
	const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false)

	const dispatch = useAppDispatch()

	const userEmail = useSelector(getUserEmail)

	const closeModal = useCallback(() => {
		setIsVisibleModal(false)
	}, [isVisibleModal])

	const openModal = () => {
		setIsVisibleModal(true)
	}

	const signOut = () => {
		dispatch(signOutThunk())
	}
	console.log('header')
	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<h1 className="header__logo">Habr</h1>
					<div className="header__actions">
						<ThemeSwitchButton />
						<TranslateSwitchButton />
						{!userEmail ? (
							<Button onClick={openModal} theme="primary">
								Sign in
							</Button>
						) : (
							<Button onClick={signOut} theme="primary">
								Sign out
							</Button>
						)}
					</div>
				</div>
			</div>
			<Modal isVisible={isVisibleModal} closeHandler={closeModal} lazy={true}>
				<Auth />
			</Modal>
		</header>
	)
}
