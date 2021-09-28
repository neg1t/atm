import React, { FC } from 'react'
import styles from './styles.module.scss'
import { Title } from '@components/Title'
import {SettingsCard} from './atoms/SettingsCard'
import { useBill } from '../../hooks/useContext';

export const SettingsPage: FC = () => {

  const {allVariants} = useBill()

  return (
    <div>
      <Title text='Настройки'/>
      <div className={styles.card_container}>
        {allVariants.map(variant => (
          <SettingsCard key={variant.id} variant={variant}/>
        ))}
      </div>
    </div>
  )
}