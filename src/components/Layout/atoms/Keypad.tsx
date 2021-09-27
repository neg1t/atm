import React, { FC } from 'react'
import styles from './styles.module.scss'
import { MainKey } from '../molecules/MainKey'
import { ExtraKey } from '../molecules/ExtraKey'
import * as buttons from './buttons'
import { useHistory } from 'react-router-dom';
import { useBill } from '@hooks/useContext';

export const Keypad: FC = () => {

  const { enter, keyClick, clear } = useBill()

  const history = useHistory()

  const mainClickHandler = (value: string) => {
    // console.log(value)
    keyClick(value)
  }

  const extraKeyClickHandler = (type: buttons.TExtraValue) => () => {
    if (type === 'clear') {
      clear()
    } else if (type === 'enter') {
      const instance = enter()
      console.log(instance)
    } else {
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