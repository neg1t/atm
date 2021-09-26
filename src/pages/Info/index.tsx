import React, { FC } from 'react'
import styles from './styles.module.scss'
import { Image } from '@components/Image'
import Ruble from '@icons/ruble.svg'
import { CurrencyList } from '../../components/CurrencyList/index';

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

  return (
    <div className={styles.container}>
      <h2>Информация</h2>
      <CurrencyList bills={initialBills}/>
      {/* <Image src={Ruble} alt='Изображение рубля' className={styles.ruble_image}/> */}
    </div>
  )
}