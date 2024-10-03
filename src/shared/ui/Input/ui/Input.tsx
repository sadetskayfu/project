import { classNames, getModuleClassNames } from '@/shared/lib'
import * as styles from './style.module.scss'
import { InputHTMLAttributes, ChangeEvent, memo } from 'react'

type InputTheme = 'primary' | 'transparent'
type LabelTheme = 'label-placeholder' | 'label-none' | 'label-static'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    additionalClasses?: string[]
    label: string
    id: string
    theme?: InputTheme
    labelTheme?: LabelTheme
    value: string
    onChange: (value: string) => void
}

export const Input = memo((props: InputProps) => {
    console.log('input')
    const { 
            value, 
            onChange, 
            additionalClasses = [], 
            label, 
            id, 
            theme = 'primary', 
            labelTheme = 'label-placeholder', 
            ...otherProps 
        } = props
    
    const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value.trim())
    }

    const mods: Record<string, boolean> = {
        [styles['active']]: value.length !== 0
    }

    const additionalCls: string[] = [
        ...getModuleClassNames([theme, labelTheme], styles), 
        ...additionalClasses]

    return (
        <div className={classNames(styles['field'], additionalCls, mods)}>
            <label className={styles['label']} htmlFor={id}>{label}</label>
            <input className={styles['input']} 
                id={id} 
                value={value} 
                onChange={onChangeValue} 
                {...otherProps} 
            />
        </div>
    )
})