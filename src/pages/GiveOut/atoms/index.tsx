import React, { FC } from 'react'
import { IEnter } from '@hooks/useContext'
import { CurrencyList } from '@components/CurrencyList'
import { Button } from '@components/Button'
import { useHistory } from 'react-router'
import styles from '../styles.module.scss'

export const GiveOutResult: FC<IEnter> = (result) => {
  const history = useHistory()

  const onClickHandler = () => {
    history.push('/')
  }

  return (
    result.remain === 0
      ?
      <div>
        <p>Выдано:</p>
        <CurrencyList bills={result?.givenBills} />
        <div className={styles.leave_button}>
          <Button label='OK' onClick={onClickHandler} />
        </div>
      </div>
      :
      <div>
        <p>Выдано:</p>
        <CurrencyList bills={result?.givenBills} />
        <p>К сожалению, в банкомате нет купюры номиналом в {result.remain}. Вам выдано: {result.issued}. <br /> Приносим извинения за доставленные неудобства.</p>
        <div className={styles.leave_button} >
          <Button label='OK' onClick={onClickHandler} />
        </div>
      </div>
  )
}