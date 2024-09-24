import { useTranslation } from 'react-i18next'
import { Modal } from '@/widgets/Modal'
import { Button } from '@/shared/ui/Button'
import { useCallback, useState } from 'react'
import './style.scss'
import { LoginForm } from '@/entities/LoginForm'

const MainPage = () => {
	const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false)

	const closeModal = useCallback(() => {
		setIsVisibleModal(false)
	}, [isVisibleModal])

	const { t } = useTranslation()
	console.log('MainPage')
	return (
		<div className="main-page">
			<h2 className="main-page__title">{t('Home Page')}</h2>
			<Button onClick={() => setIsVisibleModal(true)} >Open modal</Button>
			<Modal isVisible={isVisibleModal} closeHandler={closeModal}>
				<LoginForm />
			</Modal>
		</div>
	)
}

export default MainPage
