import type { Meta, StoryObj } from '@storybook/react'
import { ToggleSwitchSize, ToggleSwitchActiveEmulatorScale } from './ToggleSwitch'
import { fn } from '@storybook/test'

import { ToggleSwitch } from './ToggleSwitch'
import { ThemeDecorator } from '@/shared/storybook'
import { Theme } from '@/app/providers/theme'

const meta = {
	title: 'shared/ToggleSwitch',
	component: ToggleSwitch,
	tags: ['autodocs'],
} satisfies Meta<typeof ToggleSwitch>

export default meta

type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
	args: {
		theme: 'primary',
		size: ToggleSwitchSize.SMALL,
		additionalClasses: [],
		name: 'ToggleSwitch',
		label: 'ToggleSwitch',
	},
	decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const PrimaryDark: Story = {
	args: {
		theme: 'primary',
		size: ToggleSwitchSize.SMALL,
		additionalClasses: [],
		name: 'ToggleSwitch',
		label: 'ToggleSwitch',
	},
	decorators: [ThemeDecorator(Theme.DARK)]
}


export const SecondaryLight: Story = {
	args: {
		theme: 'secondary',
		size: ToggleSwitchSize.SMALL,
		additionalClasses: [],
		name: 'ToggleSwitch',
		label: 'ToggleSwitch',
	},
	decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const SecondaryDark: Story = {
	args: {
		theme: 'secondary',
		size: ToggleSwitchSize.SMALL,
		additionalClasses: [],
		name: 'ToggleSwitch',
		label: 'ToggleSwitch',
	},
	decorators: [ThemeDecorator(Theme.DARK)]
}

// export const Large: Story = {
// 	args: {
// 		theme: ToggleSwitchTheme.PRIMARY,
// 		size: ToggleSwitchSize.LARGE,
// 		additionalClasses: [],
// 		name: 'ToggleSwitch',
// 		label: 'ToggleSwitch',
// 	},
// }

// export const ActiveEmulatorScale: Story = {
// 	args: {
// 		theme: ToggleSwitchTheme.PRIMARY,
// 		size: ToggleSwitchSize.SMALL,
// 		emulatorScale: ToggleSwitchActiveEmulatorScale.LARGE,
// 		additionalClasses: [],
// 		name: 'ToggleSwitch',
// 		label: 'ToggleSwitch',
// 	},
// }