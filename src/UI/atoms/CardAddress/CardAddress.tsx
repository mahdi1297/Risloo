import React, { FC } from 'react'

import styles from './CardAddress.module.css'
import { CardAddressProps } from './CardAddress.types'

export const CardAddress: FC<CardAddressProps> = ({ address }) => {
  return <p className={styles.addess}>{address}</p>
}
