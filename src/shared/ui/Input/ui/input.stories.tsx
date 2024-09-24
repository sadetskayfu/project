import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { ThemeDecorator } from '@/shared/storybook/decorators'
import { Theme } from '@/app/providers/theme'

const meta = {
	title: 'shared/Input',
	component: Input,
    args: {
        label: 'Email',
        id: 'id',
        value: '',
        placeholder: '',
        onChange: () => undefined
    },
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        theme: 'primary',
        labelTheme: 'label-placeholder',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const PrimaryDark: Story = {
    args: {
        theme: 'primary',
        labelTheme: 'label-placeholder',
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const Transparent: Story = {
    args: {
        theme: 'transparent',
        labelTheme: 'label-placeholder',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const LabelStatic: Story = {
    args: {
        theme: 'primary',
        labelTheme: 'label-static',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const LabelNone: Story = {
    args: {
        theme: 'primary',
        labelTheme: 'label-none',
    },
    decorators: [ThemeDecorator(Theme.LIGHT)]
}


