import React, { useState, useContext, createContext, SetStateAction } from 'react'
import { IBills } from '~types/index'
import { giveMoney } from '@utils/helper'
import json from '../bills.json'

export interface IJsonBill {
  id: number
  variants: IBills
}

export interface IEnter {
  message: string
  currentBills: IBills
  givenBills: IBills
  remain: number
  issued: number
}

export interface ContextProps {
  bill: {
    value: string
    error: string
    setError: React.Dispatch<SetStateAction<string>>
    keyClick: (val: string, type: 'button' | 'input') => void
    clear: () => void
    enter: () => void | IEnter
    billState: IBills
    setBillState: React.Dispatch<SetStateAction<IBills>>
    allVariants: IJsonBill[]
  }
}

const AppContext = createContext<ContextProps>({
  bill: {
    value: '',
    error: '',
    billState: {} as IBills,
    allVariants: [] as IJsonBill[],
    setError: () => {/*empty */ },
    setBillState: () => {/*empty */ },
    enter: () => ({} as IEnter),
    keyClick: () => () => {/*empty */ },
    clear: () => {/*empty */ },
  }
})

export const ProvideAppContext: React.FunctionComponent = ({ children }) => {
  const bill = useProvideBill()
  return <AppContext.Provider value={{ bill }}>{children}</AppContext.Provider>
}

export const useBill = () => {
  const { bill } = useContext(AppContext)
  return bill
}


const useProvideBill = () => {
  const allVariants = [...json.bills]
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const [billState, setBillState] = useState<IBills>(allVariants[0].variants as IBills)

  const keyClick = (val: string, type: 'button' | 'input') => {
    setError('')
    if (value.length < 10) {
      if (type === 'button') {
        setValue(value + val)
      } else {
        setValue(val)
      }
    }
  }

  const clear = () => {
    setValue('')
  }

  const enter = () => {
    if (value !== '' && Number(value) !== 0) {
      const result = giveMoney(Number(value), billState)
      result.message === 'Деньги выданы' ? setBillState(result.currentBills) : setError(result.message)
      clear()
      return result
    } else {
      return setError('Введите число отличное от нуля')
    }
  }

  return { billState, setBillState, allVariants, value, keyClick, clear, enter, error, setError }
}