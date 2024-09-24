import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { TranslateSwitchButton } from './TranslateSwitchButton'
import { ThemeDecorator } from '@/shared/storybook/decorators'
import { Theme } from '@/app/providers/theme'

const meta = {
	title: 'shared/TranslateSwitchButton',
	component: TranslateSwitchButton,
	tags: ['autodocs'],
} satisfies Meta<typeof TranslateSwitchButton>

export default meta

type Story = StoryObj<typeof meta>

export const Dark: Story = {
   decorators: [ThemeDecorator(Theme.DARK)]
}

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)]
 }
