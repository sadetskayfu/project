import { Link, LinkProps } from 'react-router-dom'
import { FC } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { getModuleClassNames } from '@/shared/lib/getModuleClassNames/getModuleClassNames'
import * as styles from './style.module.scss'

export enum NavLinkTheme {
	UNDERLINE_CENTER = 'underline-center',
	UNDERLINE_TO_LEFT = 'underline-to-left', 
	UNDERLINE_TO_RIGHT = 'underline-to-right',
	UNDERLINE_NONE = 'underline-none' // default
}

interface NavLinkProps extends LinkProps {
	theme?: NavLinkTheme
	additionalClasses?: string[]
}

export const NavLink: FC<NavLinkProps> = (props) => {
	const { theme = NavLinkTheme.UNDERLINE_NONE, additionalClasses = [], children, to } = props

	return (
		<Link className={classNames(styles['nav-link'], [...getModuleClassNames([theme], styles), ...additionalClasses])} to={to}>
			{children}
		</Link>
	)
}
