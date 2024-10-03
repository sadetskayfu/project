import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@/app/providers/theme'
import App from '@/app/App'
import '@/app/providers/i18n/i18n'
import { StoreProvider } from './app/providers/store'

const root = createRoot(document.getElementById('root'))
root.render(
	<StoreProvider>
		<BrowserRouter>
			<ThemeProvider>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</StoreProvider>
)
