import { render, screen } from '@testing-library/react'
import { ThemeSwitchButton } from './ThemeSwitchButton'

describe('Theme switch button', () => {
	test('Test render', () => {
		render(<ThemeSwitchButton />)
        expect(screen.getByRole('button')).toBeInTheDocument()
        screen.debug()
	})
})
