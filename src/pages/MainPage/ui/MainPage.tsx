import { useTranslation } from 'react-i18next'
import './style.scss'
import { useEffect } from 'react'
import { ToggleSwitch, ToggleSwitchTheme } from '@/shared/ui/ToggleSwitch'

const MainPage = () => {
	const { t, i18n } = useTranslation()

	return (
		<div className="main-page">
			<h2 className="main-page__title">{t('Home Page')}</h2>
			<ToggleSwitch label='' themes={[ToggleSwitchTheme.SWITCH_MIDDLE, ToggleSwitchTheme.TOGGLE_SWITCH_MIDDLE]}/>
		</div>
	)
}

export default MainPage
