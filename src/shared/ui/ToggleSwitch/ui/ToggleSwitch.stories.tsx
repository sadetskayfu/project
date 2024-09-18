import type { Meta, StoryObj } from '@storybook/react'
import { ToggleSwitchSize, ToggleSwitchTheme, ToggleSwitchActiveEmulatorScale } from './ToggleSwitch'
import { fn } from '@storybook/test'

import { ToggleSwitch } from './ToggleSwitch'

const meta = {
	title: 'shared/ToggleSwitch',
	component: ToggleSwitch,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof ToggleSwitch>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
	args: {
		theme: ToggleSwitchTheme.PRIMARY,
		size: ToggleSwitchSize.SMALL,
		additionalClasses: [],
		name: 'ToggleSwitch',
		label: 'ToggleSwitch',
	},
}

export const Secondary: Story = {
	args: {
		theme: ToggleSwitchTheme.SECONDARY,
		size: ToggleSwitchSize.SMALL,
		additionalClasses: [],
		name: 'ToggleSwitch',
		label: 'ToggleSwitch',
	},
}

export const Large: Story = {
	args: {
		theme: ToggleSwitchTheme.PRIMARY,
		size: ToggleSwitchSize.LARGE,
		additionalClasses: [],
		name: 'ToggleSwitch',
		label: 'ToggleSwitch',
	},
}

export const ActiveEmulatorScale: Story = {
	args: {
		theme: ToggleSwitchTheme.PRIMARY,
		size: ToggleSwitchSize.SMALL,
		emulatorScale: ToggleSwitchActiveEmulatorScale.LARGE,
		additionalClasses: [],
		name: 'ToggleSwitch',
		label: 'ToggleSwitch',
	},
}