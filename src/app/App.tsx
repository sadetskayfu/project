import { Suspense } from 'react'
import { useTheme } from './providers/theme'
import { classNames } from '@/shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'
import { Header } from '@/widgets/Header'
import { Navbar } from '@/widgets/Navbar'
import './styles/styles.scss'

export default function App() {
	const { theme } = useTheme()

	return (
		<div className={classNames('app', [theme])}>
			<Suspense fallback="<h1>Loading...</h1>">
				<Header />
				<main className="content">
					<div className="content__inner container">
						<Navbar />
						<AppRouter />
					</div>
				</main>
			</Suspense>
		</div>
	)
}
