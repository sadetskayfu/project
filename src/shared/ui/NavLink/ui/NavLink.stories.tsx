import type { Meta, StoryObj } from '@storybook/react'
import { NavLink, NavLinkTheme } from './NavLink'

const meta = {
	title: 'shared/NavLink',
	component: NavLink,
	tags: ['autodocs'],
    args: {
        to: '/',
        children: 'Home page',
    },
} satisfies Meta<typeof NavLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        theme: NavLinkTheme.UNDERLINE_NONE,
    }
}

export const UnderlineCenter: Story = {
    args: {
        theme: NavLinkTheme.UNDERLINE_CENTER,
    }
}

export const UnderlineToLeft: Story = {
    args: {
        theme: NavLinkTheme.UNDERLINE_TO_LEFT,
    }
}

export const UnderlineToRight: Story = {
    args: {
        theme: NavLinkTheme.UNDERLINE_TO_RIGHT,
    }
}