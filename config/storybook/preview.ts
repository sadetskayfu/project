import type { Preview } from '@storybook/react'
import '../../src/app/styles/styles.scss'
import { RouterDecorator } from '@/shared/storybook'

const preview: Preview = {
	parameters: {
		backgrounds: {
			values: [
				{name: 'Dark', value: '#202029'},
				{name: 'Light', value: '#F6F6F8'}
			]
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [RouterDecorator],
}

export default preview
