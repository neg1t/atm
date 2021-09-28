import React, { FC } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

interface IInput {
  className?: string
  maxLength?: number
  onChange: (value: string) => void
  value: string
  error?: string
}

export const NumberInput: FC<IInput> = ({ className, maxLength, onChange, value, error }) => {

  const onChangeHanler = (ev: React.FormEvent<HTMLInputElement>) => {
    const val = ev.currentTarget.value
    if (/^\d*((\.|,)\d{0,2})?$/.test(val)) {
      onChange(val)
    }
  }

  return (
    <div className={styles.container}>
      <input
        className={clsx(styles.input, className)}
        maxLength={maxLength}
        onChange={onChangeHanler}
        value={value}
        type="text"
      />
      {error && (
        <span className={styles.error}>{error}</span>
      )}
    </div>
  )
}