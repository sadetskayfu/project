import { Link, LinkProps } from 'react-router-dom'
import { FC, ReactNode } from 'react'
import { classNames } from 'classNames'
import { getModuleClassNames } from 'moduleClassNames'
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

export const NavLink: FC<NavLinkProps> = (props) => {
	const {
		themes = [NavLinkTheme.UNDERLINE_LEFT],
		additionalClasses = [],
		children,
		to,
	} = props

	return (
		<Link
			className={classNames(styles.nav_link, [
				...getModuleClassNames(themes, styles),
				...additionalClasses,
			])}
			to={to}
		>
			{children}
		</Link>
	)
}
