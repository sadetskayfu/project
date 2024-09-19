import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { TranslateSwitchButton } from './TranslateSwitchButton'

const meta = {
	title: 'shared/TranslateSwitchButton',
	component: TranslateSwitchButton,
	tags: ['autodocs'],
} satisfies Meta<typeof TranslateSwitchButton>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        additionalClasses: []
    }
}
