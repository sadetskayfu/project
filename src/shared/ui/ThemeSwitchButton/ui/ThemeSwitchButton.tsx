import { FC, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useTheme } from '@/app/providers/theme'
import { Theme } from '@/app/providers/theme'
import Sun from './icons/sun.svg'
import Moon from './icons/moon.svg'
import * as styles from './style.module.scss'

interface ThemeSwitchButtonProps {
	additionalClasses?: string[]
}

export const ThemeSwitchButton: FC<ThemeSwitchButtonProps> = ({ additionalClasses = [] }) => {
	const { theme, toggleTheme } = useTheme()

	const currentTheme = Theme.DARK === theme

	const [isToggled, setIsToggled] = useState<boolean>(currentTheme)

	const onToggle = () => {
		toggleTheme()
		setIsToggled(!isToggled)
	}

	return (
		<button onClick={onToggle} className={classNames(styles.button, [...additionalClasses], { [styles.active]: isToggled })} type="button">
			<span className="visually-hidden">Switching the color theme</span>
			<span className={styles.emulator}>{currentTheme ? <Moon /> : <Sun />}</span>
		</button>
	)
}
