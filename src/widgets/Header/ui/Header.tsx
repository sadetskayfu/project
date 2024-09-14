import { useTheme } from '@/app/providers/theme'
import './style.scss'

export const Header = () => {
	const { toggleTheme } = useTheme()

	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<h1 className="header__logo">Habr</h1>
					<div className="header__actions">
						<button onClick={toggleTheme}>Toggle theme</button>
					</div>
				</div>
			</div>
		</header>
	)
}
