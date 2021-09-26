import React, { FC } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

interface IMainKey {
  key?: number
  value: number | string
  extra: string[]
}

export const MainKey: FC<IMainKey> = ({ value, extra }) => {

  return (
    <div
      className={clsx(styles.main_button, value === '' && styles.disabled)}
    >
      <span className={styles.value}>{value}</span>
      <span className={styles.extra}>{extra.join('')}</span>
    </div>
  )
}