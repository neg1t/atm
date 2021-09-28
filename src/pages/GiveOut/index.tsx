import React, { FC } from "react"
import styles from './styles.module.scss'
import { Title } from '@components/Title'
import { NumberInput } from '@components/NumberInput'
import { useBill, IEnter } from '@hooks/useContext';
import { Button } from "@components/Button";
import { CurrencyList } from '@components/CurrencyList/index';
import { useHistory, useLocation } from 'react-router-dom';

export const GiveOutPage: FC = () => {
  const { keyClick, value, clear, error, enter, setError } = useBill()
  const [result, setResult] = React.useState<IEnter>({} as IEnter)
  const history = useHistory()
  const location = useLocation<IEnter>()

  React.useEffect(() => {
    clear()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    if (location.state) {
      if (location.state.message === 'Деньги выданы') {
        setResult(location.state)
        setTimeout(() => {
          history.push('/')
        }, 3000)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  // React.useEffect(() => {
  //   const result = enter()
  // }, [enter])

  const enterClickHandler = React.useCallback(() => {
    const result = enter()
    if (result?.message === 'Деньги выданы') {
      setResult(result)
      setTimeout(() => {
        history.push('/')
      }, 3000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enter])

  const changeHandler = (val: string) => {
    setError('')
    keyClick(val, 'input')
  }

  return (
    <div className={styles.container}>
      <Title text='Выдача' />
      {result?.message
        ?
        <div>
          <p>Вам Выдано:</p>
          <CurrencyList bills={result?.givenBills} />
        </div>
        :
        <>
          <div className={styles.input_container}>
            <NumberInput
              maxLength={10}
              onChange={changeHandler}
              value={value}
              error={error}
            />
          </div>
          <div className={styles.button}>
            <Button label='Вывести' onClick={enterClickHandler} />
          </div>
        </>
      }
    </div>
  )
}