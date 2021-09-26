import React, { FC } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

interface IExtraKey {
  key?: number
  value: string
  color?: string
}

export const ExtraKey: FC<IExtraKey> = ({ value, color }) => {

  return (
    <div
      className={clsx(styles.extra_button, value === '' && styles.disabled)}
      style={{ background: color }}
    >
      <p className={styles.value} >{value}</p>
    </div>
  )
}