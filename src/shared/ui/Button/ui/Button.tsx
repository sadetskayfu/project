import { ButtonHTMLAttributes, FC } from 'react'
import * as styles from './style.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { getModuleClassNames } from '@/shared/lib/getModuleClassNames/getModuleClassNames'

type ButtonTheme = 'primary' | 'secondary' | 'transparent'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	theme?: ButtonTheme
	children: string
	additionalClasses?: string[]
}

export const Button: FC<ButtonProps> = (props) => {
	
	const { children, additionalClasses = [], theme = 'primary', ...otherProps } = props

	const additionalCls: string[] = [
		...additionalClasses,
		...getModuleClassNames([theme], styles),
	]

	return (
		<button
			className={classNames(styles['button'], additionalCls)}
			{...otherProps}
		>
			{children}
		</button>
	)
}
