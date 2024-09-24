import { Suspense } from 'react'
import { AppRouter } from './providers/router'
import { Header } from '@/widgets/Header'
import { Navbar } from '@/widgets/Navbar'
import './styles/styles.scss'

export default function App() {

	return (
		<div className='app'>
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
