import { useTranslation } from 'react-i18next'
import './style.scss'

const MainPage = () => {

	const { t } = useTranslation()
	console.log('MainPage')
	return (
		<div className="main-page">
			<h2 className="main-page__title">{t('Home Page')}</h2>
		</div>
	)
}

export default MainPage
