import React, { FC } from 'react'
import styles from './styles.module.scss'
import { MainKey } from '../molecules/MainKey'
import { ExtraKey } from '../molecules/ExtraKey'
import * as buttons from './buttons'
import { useHistory, useLocation } from 'react-router-dom';
import { useBill } from '@hooks/useContext'

export const Keypad: FC = () => {

  const { enter, keyClick, clear } = useBill()
  const location = useLocation()
  const history = useHistory()

  const mainClickHandler = (value: string) => {
    if (location.pathname === '/give-out') {
      keyClick(value, 'button')
    }
  }

  const extraKeyClickHandler = (type: buttons.TExtraValue) => () => {
    if (type === 'clear') {
      clear()
    } else if (type === 'enter') {
      if (location.pathname === '/give-out') {
        const result = enter()
        history.push('/give-out', { ...result })
      }
    } else if (type === 'cancel') {
      history.push('/')
    }
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
            onClick={extraKeyClickHandler(button.value)}
          />
        ))}
      </div>
    </div>
  )
}