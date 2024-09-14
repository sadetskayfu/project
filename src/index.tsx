import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './app/providers/theme/ui/ThemeProvider'
import App from './app/App'
import './app/providers/i18n/i18n'

const root = createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>
)
