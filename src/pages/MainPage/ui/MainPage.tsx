import { useTranslation } from 'react-i18next'
import './style.scss'
import { ToggleSwitch, ToggleSwitchActiveEmulatorScale, ToggleSwitchTheme } from '@/shared/ui/ToggleSwitch'

const MainPage = () => {
	const { t } = useTranslation()

	return (
		<div className="main-page">
			<h2 className="main-page__title">{t('Home Page')}</h2>
		</div>
	)
}

export default MainPage
