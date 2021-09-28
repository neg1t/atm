import React, { FC } from "react"
import styles from './styles.module.scss'
import clsx from 'clsx'
import { useBill, IJsonBill } from '@hooks/useContext';
import { useHistory } from 'react-router-dom';


interface ISettingsCard {
  className?: string
  variant: IJsonBill
}


export const SettingsCard: FC<ISettingsCard> = ({ className, variant }) => {

  const { setBillState } = useBill()
  const history = useHistory()

  const onClickHandler = () => {
    setBillState(variant.variants)
    history.push('/')
  }

  return (
    <div className={clsx(styles.card, className)} onClick={onClickHandler}>
      <div className={styles.text}>
        <p className={styles.label}>
          {Object.entries(variant.variants).map(item => `${item[0]} = ${item[1]}`).join(', ')}
        </p>
      </div>
    </div>
  )
}