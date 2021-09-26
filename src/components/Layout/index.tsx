import React, { FC } from 'react'
import styles from './styles.module.scss'
import { Keypad } from './atoms/Keypad'
import { Routes } from '@pages/Router'

export const Layout: FC = () => {

  return (
    <div
      className={styles.atm}
    >
      <div
        className={styles.content}
      >
        <div className={styles.screen}>
          <Routes />
        </div>
        <div className={styles.keypad_container}>
          <Keypad />
        </div>
      </div>
    </div>
  )
}