import type { Meta, StoryObj } from '@storybook/react'

import { NavLink, NavLinkTheme } from './NavLink'

const meta = {
	title: 'shared/NavLink',
	component: NavLink,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof NavLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        theme: NavLinkTheme.UNDERLINE_NONE,
        children: 'Home page',
        to: '/',
        additionalClasses: [],
    }
}

export const UnderlineCenter: Story = {
    args: {
        theme: NavLinkTheme.UNDERLINE_NONE,
        children: 'Home page',
        to: '/',
        additionalClasses: [],
    }
}

export const UnderlineToLeft: Story = {
    args: {
        theme: NavLinkTheme.UNDERLINE_TO_LEFT,
        children: 'Home page',
        to: '/',
        additionalClasses: [],
    }
}

export const UnderlineToRight: Story = {
    args: {
        theme: NavLinkTheme.UNDERLINE_TO_RIGHT,
        children: 'Home page',
        to: '/',
        additionalClasses: [],
    }
}