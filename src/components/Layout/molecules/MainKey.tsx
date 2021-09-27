import React, { FC } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

interface IMainKey {
  key?: number
  value: number | string
  extra: string[]
  onClick?: (val: string) => void
}

export const MainKey: FC<IMainKey> = ({ value, extra, onClick }) => {

  const keyClickHandler = () => {
    onClick && value !== '' && onClick(String(value))
  }

  return (
    <div
      className={clsx(styles.main_button, value === '' && styles.disabled)}
      onClick={keyClickHandler}
    >
      <span className={styles.value}>{value}</span>
      <span className={styles.extra}>{extra.join('')}</span>
    </div>
  )
}