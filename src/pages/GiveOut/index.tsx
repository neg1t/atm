import React, { FC, useRef } from "react"
import styles from './styles.module.scss'
import { Title } from '@components/Title'
import { NumberInput } from '@components/NumberInput'
import { useBill, IEnter } from '@hooks/useContext';
import { Button } from "@components/Button";
import { useHistory, useLocation } from 'react-router-dom';
import { GiveOutResult } from "./atoms";

export const GiveOutPage: FC = () => {
  const { keyClick, value, clear, error, enter, setError } = useBill()
  const [result, setResult] = React.useState<IEnter>({} as IEnter)
  const history = useHistory()
  const location = useLocation<IEnter>()

  const timeRef: {
    current: NodeJS.Timeout | null
 } = useRef(null)

  React.useEffect(() => {
    clear()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    if (location.state) {
      if (location.state.message === 'Деньги выданы') {
        setResult(location.state)
        timeRef.current = setInterval(() => {
          history.push('/')
        }, 5000)
      }
    }
    return () => clearInterval(timeRef.current  as NodeJS.Timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location])

  const enterClickHandler = () => {
    const result = enter()
    if (result?.message === 'Деньги выданы') {
      setResult(result)
      timeRef.current = setTimeout(() => {
        history.push('/')
      }, 5000)
    }
  }

  const changeHandler = (val: string) => {
    setError('')
    keyClick(val, 'input')
  }

  return (
    <div className={styles.container}>
      <Title text='Выдача' />
      {result?.message
        ? 
        <GiveOutResult {...result}/>
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