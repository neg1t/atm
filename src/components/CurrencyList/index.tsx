import React, { FC } from 'react'
import styles from './styles.module.scss'
import { CurrencyListItem } from './molecules/ListItem'
import { IBills } from 'types'

interface ICurrencyList {
  bills: IBills
}

export const CurrencyList: FC<ICurrencyList> = ({ bills }): JSX.Element => {

  return (
    <div className={styles.list_container}>
      {Object.entries(bills).map((arr, index) => (
        <CurrencyListItem key={index} bill={arr[0]} count={arr[1]} />
      ))}
    </div>
  )
}