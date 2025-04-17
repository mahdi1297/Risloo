import React, { FC } from 'react'
import { CardAddressProps } from './CardAddress.types'
import styles from './CardAddress.module.css'

export const CardAddress: FC<CardAddressProps> = ({ address }) => {
    return (
        <p className={styles.addess}>{address}</p>
    )
}