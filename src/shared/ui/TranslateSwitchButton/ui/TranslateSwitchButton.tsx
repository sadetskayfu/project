import { FC, useState } from 'react'
import { classNames } from 'classNames'
import { useTranslation } from 'react-i18next'
import * as styles from './style.module.scss'

interface TranslateSwitchButtonProps {
	additionalClasses?: string[]
}

export const TranslateSwitchButton: FC<TranslateSwitchButtonProps> = ({ additionalClasses = [] }) => {
    
	const { i18n } = useTranslation()

	const currentLanguage = i18n.language === 'en'

	const [buttonState, setButtonState] = useState<boolean>(currentLanguage)

	const toggleLanguage = () => {
		setButtonState(!buttonState)
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<button onClick={toggleLanguage} className={classNames(styles.button, [...additionalClasses], { [styles.eng]: buttonState })}>
			<span className="visually-hidden">Switching the language</span>
		</button>
	)
}
