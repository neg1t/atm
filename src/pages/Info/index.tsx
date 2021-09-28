import React, { FC } from 'react'
import styles from './styles.module.scss'
import { CurrencyList } from '@components/CurrencyList/index'
import { Button } from '@components/Button/index'
import { useHistory } from 'react-router-dom';
import { useBill } from '@hooks/useContext'
import { Title } from '@components/Title'

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