import { ButtonHTMLAttributes, FC, useState } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { getModuleClassNames } from '@/shared/lib/getModuleClassNames/getModuleClassNames'
import * as styles from './style.module.scss'

type BurgerButtonTheme = 'burger' | 'cross' | 'burger-cross'
type BurgerButtonSize = 'small' | 'large'

interface BurgerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	additionalClasses?: string[]
	clickHandler?: () => void
	label: string
	theme?: BurgerButtonTheme
	size?: BurgerButtonSize
}

export const BurgerButton: FC<BurgerButtonProps> = (props) => {
	const {
		clickHandler,
		additionalClasses = [],
		label,
		theme = 'burger',
		size = 'small',
	} = props

	const [isCross, setIsCross] = useState<boolean>(false)

	const onClick = () => {
		if (theme === 'burger-cross') {
			setIsCross((prev) => !prev)
		}
		if (clickHandler) {
			clickHandler()
		}
	}

	const mods: Record<string, boolean> = {
		[styles['active']]: isCross,
	}
	const additionalCls: string[] = [
		...additionalClasses,
		...getModuleClassNames([theme, size], styles),
	]
	console.log('BurgerButton')
	return (
		<button
			onClick={onClick}
			className={classNames(styles['button'], additionalCls, mods)}
			type="button"
		>
			<span className="visually-hidden">{label}</span>
		</button>
	)
}
