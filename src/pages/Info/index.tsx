import React, { FC } from 'react'
import styles from './styles.module.scss'
import { CurrencyList } from '@components/CurrencyList/index'
import { Button } from '@components/Button/index'
import { useHistory } from 'react-router-dom';
import { useBill } from '@hooks/useContext'

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
  const { allVariants, billState, setBillState } = useBill()

  const backClickHandler = () => {
    // history.push('/')
    console.log(allVariants)
    console.log(billState)
    setBillState(initialBills)
  }


  return (
    <div className={styles.container}>
      <h2>Информация</h2>
      <CurrencyList className={styles.list} bills={initialBills} />
      {/* <Image src={Ruble} alt='Изображение рубля' className={styles.ruble_image}/> */}
      <div className={styles.buttons}>
        <Button label='Назад' onClick={backClickHandler} />
      </div>
    </div>
  )
}