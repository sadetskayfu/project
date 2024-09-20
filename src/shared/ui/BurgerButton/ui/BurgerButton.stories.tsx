import type { Meta, StoryObj } from '@storybook/react'
import { BurgerButton } from './BurgerButton'
import { ThemeDecorator } from '@/shared/storybook/decorators'
import { Theme } from '@/app/providers/theme'

const meta = {
	title: 'shared/BurgerButton',
	component: BurgerButton,
	tags: ['autodocs'],
    args: {
        label: 'Open aside menu',
    },
} satisfies Meta<typeof BurgerButton>

export default meta

type Story = StoryObj<typeof meta>

export const Burger: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const BurgerDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const BurgerLarge: Story = {
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

