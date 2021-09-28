import React, { FC } from 'react'
import styles from './styles.module.scss'

interface ITitle {
  text: string
  className?: string
}

export const Title: FC<ITitle> = ({ text, className }) => {

  return (
    <div className={styles.title}>
      <h2>{text}</h2>
    </div>
  )
}