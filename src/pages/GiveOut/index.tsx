import React, { FC } from "react"
import styles from './styles.module.scss'
import { Title } from '@components/Title'

export const GiveOutPage: FC = () => {
  return (
    <div className={styles.container}>
      <Title text='Выдача' />

    </div>
  )
}