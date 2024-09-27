import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from './Modal'
import { ThemeDecorator } from '@/shared/storybook/decorators'
import { Theme } from '@/app/providers/theme'

const meta = {
	title: 'widgets/Modal',
	component: Modal,
	tags: ['autodocs'],
	args: {
		children: 'Login',
		isVisible: true,
		closeHandler: () => undefined,
	},
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof meta>

export const ModalLight: Story = {
	decorators: [ThemeDecorator(Theme.LIGHT)],
}

export const ModalDark: Story = {
	decorators: [ThemeDecorator(Theme.DARK)],
}