import { FC, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { getModuleClassNames } from '@/shared/lib/getModuleClassNames/getModuleClassNames'
import * as styles from './style.module.scss'

export enum ToggleSwitchTheme {
	TOGGLE_SWITCH_SMALL = 'toggle-switch-small',
	TOGGLE_SWITCH_MIDDLE = 'toggle-switch-middle', // default
	TOGGLE_SWITCH_BIG = 'toggle-switch-big',
	EMULATOR_SMALL = 'emulator-small',
	EMULATOR_MIDDLE = 'emulator-middle', // default
	EMULATOR_BIG = 'emulator-big',
	EMULATOR_ACTIVE_SCALE_SMALL = 'emulator-active-scale-small',
	EMULATOR_ACTIVE_SCALE_MIDDLE = 'emulator-active-scale-middle',
	EMULATOR_ACTIVE_SCALE_BIG = 'emulator-active-scale-big'
}

interface ToggleSwitchProps {
	additionalClasses?: string[]
	themes?: ToggleSwitchTheme[]
	label: string
	name?: string
}

console.log(styles)

export const ToggleSwitch: FC<ToggleSwitchProps> = (props) => {
	const { name = '', label, themes = [], additionalClasses = [] } = props

	const [isToggled, setIsToggled] = useState(false)

	const onToggle = () => {
		setIsToggled(!isToggled)
	}

	return (
		<label className={classNames(styles['toggle-switch'], [...getModuleClassNames(themes, styles), ...additionalClasses])}>
			<input className="visually-hidden" checked={isToggled} onChange={onToggle} type="checkbox" value={label} name={name} />
			<span className={styles['switch']}></span>
			<span className="visually-hidden">{label}</span>
		</label>
	)
}
