import { FC, useState } from 'react'
import { classNames, getModuleClassNames} from '@/shared/lib'
import * as styles from './style.module.scss'

type BurgerButtonTheme = 'burger' | 'cross' | 'burger-cross'
type BurgerButtonSize = 'small' | 'large'
type BurgerButtonColorTheme = 'primary' | 'transparent'

interface BurgerButtonProps {
	additionalClasses?: string[]
	onClick?: () => void
	label: string
	theme?: BurgerButtonTheme
	size?: BurgerButtonSize
	colorTheme?: BurgerButtonColorTheme
}

export const BurgerButton: FC<BurgerButtonProps> = (props) => {
	const {
		onClick,
		additionalClasses = [],
		label,
		theme = 'burger',
		size = 'small',
		colorTheme = 'primary'
	} = props

	const [isCross, setIsCross] = useState<boolean>(false)

	const onClickHandler = () => {
		if (theme === 'burger-cross') {
			setIsCross((prev) => !prev)
		}
		if (onClick) {
			onClick()
		}
	}

	const mods: Record<string, boolean> = {
		[styles['active']]: isCross,
	}
	const additionalCls: string[] = [
		...additionalClasses,
		...getModuleClassNames([theme, size, colorTheme], styles),
	]
	console.log('BurgerButton')
	return (
		<button
			onClick={onClickHandler}
			className={classNames(styles['button'], additionalCls, mods)}
			type="button"
		>
			<span className="visually-hidden">{label}</span>
		</button>
	)
}
