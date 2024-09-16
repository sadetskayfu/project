import { FC, useState } from 'react'
import { classNames } from 'classNames'
import { useTheme } from '@/app/providers/theme'
import { Theme } from '@/app/providers/theme'
import Sun from './icons/sun.svg'
import Moon from './icons/moon.svg'
import * as style from './style.module.scss'

interface ThemeSwitchButtonProps {
	additionalClasses?: string[]
}

export const ThemeSwitchButton: FC<ThemeSwitchButtonProps> = ({ additionalClasses = [] }) => {
	
	const { theme, toggleTheme } = useTheme()

	const currentTheme = Theme.DARK === theme

	const [stateButton, setStateButton] = useState<boolean>(currentTheme)

	const switchTheme = () => {
		toggleTheme()
		setStateButton(!stateButton)
	}

	return (
		<button onClick={switchTheme} className={classNames(style.button, [...additionalClasses], { [style.active]: stateButton })}>
			<span className="visually-hidden">Switching the color theme</span>
			<div className={style.switch}>{currentTheme ? <Moon /> : <Sun />}</div>
		</button>
	)
}
