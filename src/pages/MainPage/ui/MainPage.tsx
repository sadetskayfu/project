import { useTranslation } from 'react-i18next'
import { LoadingSpinner } from '@/shared/ui/LoadingSpinner'
import { Modal } from '@/widgets/Modal'
import { useState } from 'react'
import './style.scss'

const MainPage = () => {
	const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false)

	const { t } = useTranslation()
	console.log('MainPage')
	return (
		<div className="main-page">
			<h2 className="main-page__title">{t('Home Page')}</h2>
			<button onClick={() => setIsVisibleModal(true)}>Open modal</button>
			<LoadingSpinner />
			<Modal isVisible={isVisibleModal} setIsVisible={setIsVisibleModal}>
				123
			</Modal>
		</div>
	)
}

export default MainPage
