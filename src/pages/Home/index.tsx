import React, { FC } from 'react'
import styles from './styles.module.scss'
import { HomeCard } from './atoms/HomeCard'

export const HomePage: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>ATM</h1>
      </div>
      <div className={styles.card_сontainer}>
        <HomeCard redirectTo='/give-out' label='Снять деньги' />
        <HomeCard redirectTo='/info' label='Справка' extra='Узнать остаток в банкомате' />
        <HomeCard redirectTo='/settings' label='Настройки' />
      </div>
    </div>
  )
}