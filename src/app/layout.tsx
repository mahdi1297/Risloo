import { HomeTemplate } from '@/UI/templates/HomeTemplate'
import '@/styles/globals.css'
import '@/styles/grid.css'

import { ReactNode } from 'react'

import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { environments } from '@/constants/enviroments'

const vazir = localFont({
  src: [
    {
      path: './../../public/fonts/Sahel.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../../public/fonts/Sahel-Bold.woff',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-vazir',
  display: 'swap',
})

export const metadata: Metadata = {
  title: environments.SITE_TITLE,
  description: environments.SITE_DESCRIPTION,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazir.variable}`}>
      <body>
        <HomeTemplate>{children}</HomeTemplate>
      </body>
    </html>
  )
}
