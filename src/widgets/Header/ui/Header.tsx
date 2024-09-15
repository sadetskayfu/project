import { TranslateSwitchButton } from '@/shared/ui/TranslateSwitchButton'
import './style.scss'
import { ThemeSwitchButton } from '@/shared/ui/ThemeSwitchButton'

export const Header = () => {

	return (
		<header className="header">
			<div className="container">
				<div className="header__inner">
					<h1 className="header__logo">Habr</h1>
					<div className="header__actions">
						<ThemeSwitchButton/>
						<TranslateSwitchButton/>
					</div>
				</div>
			</div>
		</header>
	)
}
