import { FC, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { getModuleClassNames } from '@/shared/lib/getModuleClassNames/getModuleClassNames'
import * as styles from './style.module.scss'

// export enum ToggleSwitchTheme {
// 	PRIMARY = 'primary', // default
// 	SECONDARY = 'secondary',
// }

type ToggleSwitchTheme = 'primary' | 'secondary'

export enum ToggleSwitchSize {
	SMALL = 'toggle-switch-small', // default
	LARGE = 'toggle-switch-large',
}

export enum ToggleSwitchActiveEmulatorScale {
	SMALL = 'active-emulator-scale-small',
	LARGE = 'active-emulator-scale-large'
}

interface ToggleSwitchProps {
	additionalClasses?: string[]
	theme?: ToggleSwitchTheme
	size?: ToggleSwitchSize
	emulatorScale?: ToggleSwitchActiveEmulatorScale
	label?: string
	name?: string
}

export const ToggleSwitch: FC<ToggleSwitchProps> = (props) => {
	const {
		name = '',
		label,
		theme = 'primary', //ToggleSwitchTheme.PRIMARY,
		size = ToggleSwitchSize.SMALL,
		emulatorScale,
		additionalClasses = [],
	} = props

	const [isToggled, setIsToggled] = useState(false)

	const onToggle = () => {
		setIsToggled(!isToggled)
	}

	return (
		<label className={classNames(styles['toggle-switch'], [...getModuleClassNames([theme, size, emulatorScale], styles) ,...additionalClasses])}>
			<input className="visually-hidden" checked={isToggled} onChange={onToggle} type="checkbox" value={label} name={name} />
			<span className={styles['switch']}></span>
			<span className="visually-hidden">{label}</span>
		</label>
	)
}
