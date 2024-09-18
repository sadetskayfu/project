import { ThemeContext } from './ThemeContext'
import { FC, ReactNode, useMemo, useState } from 'react'
import { Theme } from './ThemeContext'
import { LOCAL_STORAGE_THEME_KEY } from './ThemeContext'

interface ThemeProviderProps {
	children: ReactNode
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	
	const [theme, setTheme] = useState<Theme>(defaultTheme)

	const defaultProps = useMemo(() => {
		return {
			theme,
			setTheme,
		}
	}, [theme])

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
