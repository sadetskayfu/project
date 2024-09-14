import { Route, Routes } from 'react-router-dom'
import { MainPage } from '@/pages/MainPage'
import { AboutPage } from '@/pages/AboutPage'
import { RoutePaths } from './routeConfig'

export const AppRouter = () => {
	return (
		<Routes>
			<Route path={RoutePaths.MAIN} element={<MainPage />} />
			<Route path={RoutePaths.ABOUT} element={<AboutPage />} />
		</Routes>
	)
}
