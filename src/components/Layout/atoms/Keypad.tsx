import React, { FC } from 'react'
import styles from './styles.module.scss'
import { MainKey } from '../molecules/MainKey'
import { ExtraKey } from '../molecules/ExtraKey'
import * as buttons from './buttons'

export const Keypad: FC = () => {


  const mainClickHandler = (value: string) => {
    console.log(value)
  }

  return (
    <div className={styles.conatiner}>
      <div className={styles.main_keypad}>
        {buttons.mainButtons.map((button, index) => (
          <MainKey
            key={index}
            onClick={mainClickHandler}
            value={button.value}
            extra={button.extra}
          />
        ))}
      </div>
      <div className={styles.extra_keypad}>
        {buttons.extraButtons.map((button, index) => (
          <ExtraKey
            key={index}
            value={button.value}
            color={button.color}
          />
        ))}
      </div>
    </div>
  )

}