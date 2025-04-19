import { FC } from 'react'

import styles from './CardTitle.module.css'
import { CardTitleProps } from './CardTitle.types'

export const CardTitle: FC<CardTitleProps> = ({ title }) => {
  return <p className={`${styles.title} `}>{title}</p>
}
