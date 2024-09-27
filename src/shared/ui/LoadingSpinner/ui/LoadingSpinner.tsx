import { classNames } from '@/shared/lib/classNames/classNames'
import { FC } from 'react'
import * as styles from  './style.module.scss'

interface LoadingSpinnerProps {
    additionalClasses?: string[]
}

export const LoadingSpinner: FC<LoadingSpinnerProps> = ({additionalClasses = []}) => {
    return (
        <div className={classNames('loading-spinner', [...additionalClasses])}>

        </div>
    )
}