import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Layout } from '@components/Layout'
import { ProvideAppContext } from '@hooks/useContext'
import './styles.scss'

export const App: FC = () => {
  return (
    <ProvideAppContext>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ProvideAppContext>
  )
}