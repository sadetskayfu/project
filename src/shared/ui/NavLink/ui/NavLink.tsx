import { Link, LinkProps } from 'react-router-dom'
import { FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { getModuleClassNames } from '@/shared/lib/getModuleClassNames/getModuleClassNames'
import * as styles from './style.module.scss'

export enum NavLinkTheme {
	UNDERLINE_CENTER = 'underline-center',
	UNDERLINE_LEFT = 'underline-left', // default
	UNDERLINE_RIGHT = 'underline-right',
}

interface NavLinkProps extends LinkProps {
	themes?: NavLinkTheme[]
	additionalClasses?: string[]
}

console.log(styles)

export const NavLink: FC<NavLinkProps> = (props) => {
	const { themes = [NavLinkTheme.UNDERLINE_LEFT], additionalClasses = [], children, to } = props

	return (
		<Link className={classNames(styles['nav-link'], [...getModuleClassNames(themes, styles), ...additionalClasses])} to={to}>
			{children}
		</Link>
	)
}
