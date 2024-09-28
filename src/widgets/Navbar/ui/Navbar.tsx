import { NavLink } from '@/shared/ui/NavLink'
import { ROUTES } from '@/shared/constans/routes'
import './style.scss'

export const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar__inner">
				<nav className="navbar__menu">
					<ul className="navbar__menu-list">
						<li className="navbar__menu-item">
							<NavLink to={ROUTES.MAIN}>Home page</NavLink>
						</li>
						<li className="navbar__menu-item">
							<NavLink to={ROUTES.ABOUT}>About page</NavLink>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}
