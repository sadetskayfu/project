import { ThemeContext } from './ThemeContext'
import { useMemo, useState } from 'react'
import { Theme } from './ThemeContext'
import { LOCAL_STORAGE_THEME_KEY } from './ThemeContext'

const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

const ThemeProvider = ({ children }: any) => {
	const [theme, setTheme] = useState(defaultTheme)

	const defaultProps = useMemo(() => {
		return {
			theme,
			setTheme,
		}
	}, [theme])

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
