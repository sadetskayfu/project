import { useTranslation } from 'react-i18next'
import './style.scss'
import { LoadingSpinner } from '@/shared/ui/LoadingSpinner'

const MainPage = () => {
	const { t } = useTranslation()

	return (
		<div className="main-page">
			<h2 className="main-page__title">{t('Home Page')}</h2>
			<LoadingSpinner/>
		</div>
	)
}

export default MainPage
