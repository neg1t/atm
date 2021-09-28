import React, { FC } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'
import { useHistory } from 'react-router-dom';

interface IHomeCard {
  label: string
  redirectTo?: string
  extra?: string
  className?: string
}

export const HomeCard: FC<IHomeCard> = ({ label, extra, className, redirectTo }) => {

  const history = useHistory()

  const onClickHandler = () => {
    history.push(redirectTo!)
  }

  return (
    <div className={clsx(styles.card, className)} onClick={onClickHandler}>
      <div className={styles.text}>
        <p className={styles.label}>{label}</p>
        {extra && (
          <span className={styles.extra_text}>{extra}</span>
        )}
      </div>
    </div>
  )
}