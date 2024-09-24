import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { ThemeDecorator } from '@/shared/storybook/decorators'
import { Theme } from '@/app/providers/theme'

const meta = {
	title: 'shared/Button',
	component: Button,
    args: {
        children: 'Login',
    },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        theme: 'primary'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const PrimaryDark: Story = {
    args: {
        theme: 'primary'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const Transparent: Story = {
    args: {
        theme: 'transparent'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Secondary: Story = {
    args: {
        theme: 'secondary'
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}


