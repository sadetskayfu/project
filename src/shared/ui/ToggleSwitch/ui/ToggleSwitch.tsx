import { FC, useState } from 'react'
import { classNames } from 'classNames'
import { getModuleClassNames } from 'moduleClassNames'
import * as styles from './style.module.scss'

export enum ToggleSwitchTheme {
	TOGGLE_SWITCH_SMALL = 'toggle-switch-small',
	TOGGLE_SWITCH_MIDDLE = 'toggle-switch-middle', // default
	TOGGLE_SWITCH_BIG = 'toggle-switch-big',
	SWITCH_SMALL = 'switch-small', 
	SWITCH_MIDDLE = 'switch-middle', // default
	SWITCH_BIG = 'switch-big',
}

interface ToggleSwitchProps {
	additionalClasses?: string[]
	themes?: ToggleSwitchTheme[]
	label: string
	name?: string
}

export const ToggleSwitch: FC<ToggleSwitchProps> = (props) => {

	const { name = '', label, themes = [], additionalClasses = [] } = props

	const [isToggled, setIsToggled] = useState(false)

	const onToggle = () => {
		setIsToggled(!isToggled)
	}

	return (
		<label className={classNames(styles.toggle_switch, [...getModuleClassNames(themes, styles), ...additionalClasses])}>
			<input className="visually-hidden" checked={isToggled} onChange={onToggle} type="checkbox" value={label} name={name} />
			<span className={styles.switch}></span>
			<span className="visually-hidden">{label}</span>
		</label>
	)
}
