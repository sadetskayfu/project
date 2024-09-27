import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from './Button'
import { TranslateProvider } from '@/shared/jest'

describe('Button', () => {
    test('render', () => {
        render(
            <TranslateProvider>
                <Button>Click me</Button>
            </TranslateProvider>
        )
        expect(screen.getByText('Click me')).toBeInTheDocument()
    })

    test('with theme', () => {
        render(<Button theme='transparent'>Click me</Button>)
        expect(screen.getByText('Click me')).toHaveClass('transparent')
        screen.debug()
    })
})