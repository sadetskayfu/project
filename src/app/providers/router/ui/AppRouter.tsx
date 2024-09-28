import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '@/shared/constans/routes'
import { MainPage } from '@/pages/MainPage'
import { AboutPage } from '@/pages/AboutPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ErrorBoundary } from '../../ErrorBoundary'

export const AppRouter = () => {
	return (
		<Routes>
			<Route path={ROUTES.MAIN} element={<MainPage />} />
			<Route path={ROUTES.ABOUT} element={<AboutPage />} />
			<Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
		</Routes>
	)
}
