import React, { useState, useEffect, useContext, useCallback, createContext, SetStateAction } from 'react'
import { IBills } from '~types/index'
import json from '../bills.json'

interface IJsonBill {
  id: number
  variants: IBills
}

export interface ContextProps {
  bill: {
    billState: IBills
    setBillState: React.Dispatch<SetStateAction<IBills>>
    allVariants: IJsonBill[]
  },
  buttons: {
    value: string
    keyClick: (val: string) => React.Dispatch<SetStateAction<string>>
    clear: React.Dispatch<SetStateAction<string>>
    enter: () => IBills
  }
}

const AppContext = createContext<ContextProps>({
  bill: {
    billState: {} as IBills,
    allVariants: [] as IJsonBill[],
    setBillState: () => {/*empty */ }
  },
  buttons: {
    value: '',
    keyClick: () => () => {/*empty */ },
    clear: () => {/*empty */ },
    enter: () => ({} as IBills)
  }
})

export const ProvideAppContext: React.FunctionComponent = ({ children }) => {
  const bill = useProvideBill()
  const buttons = useProvideButtons()
  return <AppContext.Provider value={{ bill, buttons }}>{children}</AppContext.Provider>
}

export const useBill = () => {
  const { bill } = useContext(AppContext)
  return bill
}

export const useButton = () => {
  const { buttons } = useContext(AppContext)
  return buttons
}


const useProvideBill = () => {
  const allVariants = [...json.bills]
  const [billState, setBillState] = useState<IBills>(allVariants[0].variants as IBills)

  return { billState, setBillState, allVariants }
}


const useProvideButtons = () => {
  const [value, setValue] = useState('')

  const keyClick = (val: string) => () => {
    setValue(value + val)
  }

  const clear = () => {
    setValue('')
  }

  const enter = () => {

    clear()

    return {
      "5000": 10,
      "2000": 10,
      "1000": 10,
      "500": 10,
      "200": 10,
      "100": 10,
      "50": 10
    }
  }

  return { value, keyClick, clear, enter }
}