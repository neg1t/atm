import React, { FC } from 'react'
import styles from './styles.module.scss'
import { Image } from '../../Image/index'
import Ruble from '@icons/ruble.svg'

interface IListItem {
  bill: string | number
  count: number
  key?: number
}

export const CurrencyListItem: FC<IListItem> = ({ bill, count }) => {

  return (
    <>
      <span className={styles.bill}>{bill} <Image className={styles.img} src={Ruble} alt='Изображение рубля' />:</span>
      <span className={styles.count}>{count}</span>
    </>
  )
}