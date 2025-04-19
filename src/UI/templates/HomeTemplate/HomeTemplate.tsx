import React, { FC } from 'react'

import { Header } from '@/UI/organisms/Header'

import { HomeTemplateProps } from './HomeTemplate.types'

export const HomeTemplate: FC<HomeTemplateProps> = ({ children }) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  )
}
