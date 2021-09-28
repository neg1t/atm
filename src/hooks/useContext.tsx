import React, { useState, useContext, createContext, SetStateAction } from 'react'
import { IBills } from '~types/index'
import { giveMoney } from '@utils/helper'
import json from '../bills.json'

export interface IJsonBill {
  id: number
  variants: IBills
}

interface IEnter {
  message: string
  currentBills: IBills
  givenBills: IBills
}

export interface ContextProps {
  bill: {
    value: string
    keyClick: (val: string) => void
    clear: () => void
    enter: () => void
    billState: IBills
    setBillState: React.Dispatch<SetStateAction<IBills>>
    allVariants: IJsonBill[]
  }
}

const AppContext = createContext<ContextProps>({
  bill: {
    value: '',
    billState: {} as IBills,
    allVariants: [] as IJsonBill[],
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
  const [billState, setBillState] = useState<IBills>(allVariants[0].variants as IBills)

  const keyClick = (val: string) => {
    setValue(value + val)
  }

  const clear = () => {
    setValue('')
  }

  const enter = () => {
    const result = giveMoney(Number(value), billState)
    result.message === 'Деньги выданы' && setBillState(result.currentBills)
    clear()
    return result
  }

  return { billState, setBillState, allVariants, value, keyClick, clear, enter }
}