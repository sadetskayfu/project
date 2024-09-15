import { useTranslation } from 'react-i18next'
import './style.scss'
import { useEffect } from 'react'

const MainPage = () => {
	const { t, i18n } = useTranslation()

	return (
		<div className="main-page">
			<button
				onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')}
			></button>
			<h2 className="main-page__title">{t('Home Page')}</h2>
		</div>
	)
}

export default MainPage
