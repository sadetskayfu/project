import { StateSchema, StoreProvider } from '@/app/providers/store'
import type { Decorator } from '@storybook/react'

export const StoreDecorator = (state: StateSchema): Decorator => (Story) => {
	return (
		<StoreProvider initialState={state}>
			<Story />
		</StoreProvider>
	)
}
