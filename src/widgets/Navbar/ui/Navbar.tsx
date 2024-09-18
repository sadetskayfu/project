import { NavLink, NavLinkTheme } from '@/shared/ui/NavLink'
import { RoutePaths } from '@/app/providers/router'
import './style.scss'

export const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__inner">
				<nav className="navbar__menu">
					<ul className="navbar__menu-list">
						<li className="navbar__menu-item">
							<NavLink to={RoutePaths.MAIN}>Home page</NavLink>
						</li>
						<li className="navbar__menu-item">
							<NavLink to={RoutePaths.ABOUT}>About page</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}
