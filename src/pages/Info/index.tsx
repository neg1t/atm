import React, { FC } from 'react'
import styles from './styles.module.scss'
import { CurrencyList } from '@components/CurrencyList/index'
import { Button } from '@components/Button/index'
import { useHistory } from 'react-router-dom';
import { useBill } from '@hooks/useContext'
import { Title } from '@components/Title'

const initialBills = {
  "5000": 10,
  "2000": 10,
  "1000": 10,
  "500": 10,
  "200": 10,
  "100": 10,
  "50": 10
}

export const InfoPage: FC = () => {

  const history = useHistory()
  const { billState } = useBill()

  const backClickHandler = () => {
    history.push('/')
  }


  return (
    <div className={styles.container}>
      <Title text='Информация' />
      <CurrencyList className={styles.list} bills={billState} />
      <div className={styles.buttons}>
        <Button label='Назад' onClick={backClickHandler} />
      </div>
    </div>
  )
}