import React, { FC } from 'react'
import styles from './styles.module.scss'
import { CurrencyListItem } from './molecules/ListItem'
import { IBills } from 'types'
import clsx from 'clsx'

interface ICurrencyList {
  bills: IBills
  className?: string
}

export const CurrencyList: FC<ICurrencyList> = ({ bills, className }): JSX.Element => {

  return (
    <div className={clsx(styles.list_container, className)}>
      {Object.entries(bills).map((arr, index) => (
        <CurrencyListItem key={index} bill={arr[0]} count={arr[1]} />
      ))}
    </div>
  )
}