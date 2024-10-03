import { FC, useState } from 'react'
import { classNames } from '@/shared/lib'
import { useTranslation } from 'react-i18next'
import * as styles from './style.module.scss'

interface TranslateSwitchButtonProps {
	additionalClasses?: string[]
}

export const TranslateSwitchButton: FC<TranslateSwitchButtonProps> = ({ additionalClasses = [] }) => {
    
	const { i18n } = useTranslation()

	const currentLanguage = i18n.language === 'en'

	const [isToggled, setIsToggled] = useState<boolean>(currentLanguage)

	const onToggle = () => {
		setIsToggled(!isToggled)
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<button onClick={onToggle} className={classNames(styles['button'], [...additionalClasses], { [styles['eng']]: isToggled })} type='button'>
			<span className="visually-hidden">Switching the language</span>
		</button>
	)
}
