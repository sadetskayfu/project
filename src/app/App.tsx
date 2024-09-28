import { Suspense, useEffect } from 'react'
import { AppRouter } from './providers/router'
import { Header } from '@/widgets/Header'
import { Navbar } from '@/widgets/Navbar'
import './styles/styles.scss'
import { useAppDispatch } from './providers/store'
import { getSessionInfoThunk } from '@/features/auth'

export default function App() {
	const dispatch = useAppDispatch()
	
	useEffect(() => {
		dispatch(getSessionInfoThunk())
	}, [])

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
