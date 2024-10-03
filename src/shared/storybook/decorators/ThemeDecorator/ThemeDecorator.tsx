import type { Decorator } from '@storybook/react'
import type { Theme } from '@/app/providers/theme'
import * as styles from './style.module.scss'

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => {
	return (
		<div className={`app ${theme}`}>
			<div className={styles['container']}>
				<Story />
			</div>   
		</div>
	)
}
