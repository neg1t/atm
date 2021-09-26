import React, {FC} from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from '@components/Layout'
import './styles.scss'

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}