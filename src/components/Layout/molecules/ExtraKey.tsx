import React, { FC } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

interface IExtraKey {
  key?: number
  value: string
  color?: string
  onClick?: () => void
}

export const ExtraKey: FC<IExtraKey> = ({ value, color, onClick }) => {

  return (
    <div
      className={clsx(styles.extra_button, value === '' && styles.disabled)}
      style={{ background: color }}
      onClick={onClick}
    >
      <p className={styles.value} >{value}</p>
    </div>
  )
}