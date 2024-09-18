import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeSwitchButton } from './ThemeSwitchButton'

describe('Theme switch button', () => {
	test('Test render', () => {
		render(<ThemeSwitchButton />)
        expect(screen.getByRole('button')).toBeInTheDocument()
	})

    test('With additional classes', () => {
		render(<ThemeSwitchButton additionalClasses={['header__btn']} />)
        expect(screen.getByRole('button')).toHaveClass('header__btn')
	})

    test('Toggle theme', () => {
        render(<ThemeSwitchButton />)
        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(button).toHaveClass('active')
    })
})
