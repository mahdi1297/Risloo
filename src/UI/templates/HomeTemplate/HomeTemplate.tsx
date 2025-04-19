import React, { FC } from 'react'
import { HomeTemplateProps } from './HomeTemplate.types'
import { Header } from '@/UI/organisms/Header'

export const HomeTemplate: FC<HomeTemplateProps> = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        {children}
      </main>
      <footer></footer>
    </>
  )
}
