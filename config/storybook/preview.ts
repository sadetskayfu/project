import type { Preview } from '@storybook/react'
import '../../src/app/styles/styles.scss'
import { RouterDecorator } from '@/shared/storybook/decorators'

const preview: Preview = {
	parameters: {
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
