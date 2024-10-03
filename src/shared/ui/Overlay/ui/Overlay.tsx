import { FC, ReactNode } from 'react'
import { classNames } from '@/shared/lib'
import * as styles from './style.module.scss'

interface OverlayProps {
	additionalClasses?: string[]
	children: ReactNode
	isVisible: boolean
	closeHandler?: () => void
}

export const Overlay: FC<OverlayProps> = (props) => {

	const { children, isVisible, closeHandler, additionalClasses = [] } = props

	const mods: Record<string, boolean> = {
		[styles['active']]: isVisible,
	}
	console.log('overlay')
	return (
		<div onClick={() => closeHandler && closeHandler()} className={classNames(styles['overlay'], [...additionalClasses], mods)}>
			{children}
		</div>
	)
}
