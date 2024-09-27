import { useCallback, useState } from 'react'
import { TranslateSwitchButton } from '@/shared/ui/TranslateSwitchButton'
import './style.scss'
import { ThemeSwitchButton } from '@/shared/ui/ThemeSwitchButton'
import { Button } from '@/shared/ui/Button'
import { Modal } from '@/widgets/Modal'
import { SingInForm } from '@/features/auth'

export const Header = () => {

	const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false)

	const closeModal = useCallback(() => {
		setIsVisibleModal(false)
	}, [isVisibleModal])

	const openModal = () => {
		setIsVisibleModal(true)
	}
 
	console.log('header')

	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<h1 className="header__logo">Habr</h1>
					<div className="header__actions">
						<ThemeSwitchButton/>
						<TranslateSwitchButton/>
						<Button onClick={openModal} theme="primary">Sing in</Button>
					</div>
				</div>
			</div>
			<Modal isVisible={isVisibleModal} closeHandler={closeModal}>
				<SingInForm/>
			</Modal>
		</header>
	)
}
