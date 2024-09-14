import { FC } from 'react'
import * as style from './style.module.scss'
import { useTranslation } from 'react-i18next'

const AboutPage: FC = () => {
	const { t } = useTranslation('about')

	return (
		<div className={style.aboutPage}>
			<h2>{t('About page')}</h2>
		</div>
	)
}

export default AboutPage
