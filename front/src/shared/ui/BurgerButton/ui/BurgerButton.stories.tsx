import type { Meta, StoryObj } from '@storybook/react'
import { BurgerButton } from './BurgerButton'
import { ThemeDecorator } from '@/shared/storybook/decorators'
import { Theme } from '@/app/providers/theme'

const meta = {
	title: 'shared/BurgerButton',
	component: BurgerButton,
    args: {
        label: 'Open aside menu',
        theme: 'burger',
        colorTheme: 'primary',
        size: 'small'
    },
} satisfies Meta<typeof BurgerButton>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const Large: Story = {
    args: {
        size:'large'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Cross: Story = {
    args: {
        theme: 'cross'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const BurgerCross: Story = {
    args: {
        theme: 'burger-cross'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Transparent: Story = {
    args: {
        colorTheme: 'transparent',
        theme: 'burger-cross'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}
