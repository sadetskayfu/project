import { memo, ReactNode, useEffect } from 'react'
import { BurgerButton } from '@/shared/ui/BurgerButton'
import { Overlay } from '@/shared/ui/Overlay'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Portal } from '@/shared/ui/Portal'
import * as styles from './style.module.scss'

interface ModalProps {
	additionalClasses?: string[]
	children: ReactNode
	isVisible: boolean
	closeHandler: () => void
}

export const Modal = memo(function Modal(props: ModalProps) {
	const { children, isVisible, closeHandler, additionalClasses = [] } = props

	// e: KeyboardEvent
	const closeModalOnKeyDown = (e: any) => {
		if (e.key === 'Escape') {
			closeHandler()
		}
	}

	const onContentClick = (e: React.MouseEvent) => {
		e.stopPropagation()
	}

	useEffect(() => {
		//console.log('effect')
		if (isVisible) {
			window.addEventListener('keydown', closeModalOnKeyDown)
			//console.log('add')
		}
		return () => {
			window.removeEventListener('keydown', closeModalOnKeyDown)
			//console.log('remove')
		}
	}, [isVisible])

	const mods: Record<string, boolean> = {
		[styles['active']]: isVisible,
	}

	console.log('Modal')

	return (
		<Portal>
			<Overlay isVisible={isVisible} closeHandler={closeHandler}>
				<div
					className={classNames(
						styles['modal'],
						[...additionalClasses],
						mods
					)}
					onClick={(e) => onContentClick(e)}
					onKeyDown={closeModalOnKeyDown}
				>
					{children}
					<BurgerButton
						onClick={closeHandler}
						theme="cross"
						label="close modal window"
						additionalClasses={[styles['close-button']]}
					/>
				</div>
			</Overlay>
		</Portal>
	)
})
