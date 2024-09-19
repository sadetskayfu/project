import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { ThemeSwitchButton } from './ThemeSwitchButton'

const meta = {
	title: 'shared/ThemeSwitchButton',
	component: ThemeSwitchButton,
	tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwitchButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        additionalClasses: []
    }
}
