import React, { FC } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

interface IButton {
  label: string
  onClick?: () => void
  className?: string
}

export const Button: FC<IButton> = ({ onClick, label, className }) => {
  return (
    <button onClick={onClick} className={clsx(styles.button, className)}>{label}</button>
  )
}