import { Route, Routes } from 'react-router-dom'
import { RoutePaths } from './routeConfig'
import { MainPage } from '@/pages/MainPage'
import { AboutPage } from '@/pages/AboutPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ErrorBoundary } from '../../ErrorBoundary'

export const AppRouter = () => {
	return (
		<Routes>
			<Route path={RoutePaths.MAIN} element={<MainPage />} />
			<Route path={RoutePaths.ABOUT} element={<AboutPage />} />
			<Route path={RoutePaths.NOT_FOUND} element={<NotFoundPage />} />
		</Routes>
	)
}
