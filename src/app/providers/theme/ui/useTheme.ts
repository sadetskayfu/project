import { useContext } from 'react'
import { Theme, ThemeContext } from './ThemeContext'
import { LOCAL_STORAGE_THEME_KEY } from './ThemeContext'

interface UseThemeResult {
	theme: Theme
	toggleTheme: () => void
}

export const useTheme = (): UseThemeResult => {
	
	const { theme, setTheme } = useContext(ThemeContext)

	const toggleTheme = () => {
		const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
		setTheme(newTheme)
	}

	return { theme, toggleTheme }
}
