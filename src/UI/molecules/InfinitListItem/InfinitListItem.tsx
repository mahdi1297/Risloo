import React, { FC } from 'react'

import { CardAddress } from '@/UI/atoms/CardAddress'
import { CardTitle } from '@/UI/atoms/CardTitle/CardTitle'
import { ManagerField } from '@/UI/atoms/ManagerFIeld/ManagerFIeld'

import styles from './InfinitListItem.module.css'
import { InfinitListItemProps } from './InfinitListItem.types'

const InfinitListItem: FC<InfinitListItemProps> = ({ item, isActive }) => {
  return (
    <div className={`${styles.box} ${isActive ? styles.activeBox : ''}`}>
      <div>
        <div className={styles.title}>
          <CardTitle title={item.detail.title} />
        </div>
        <div className={styles.address}>
          <CardAddress address={item.detail.address || ''} />
        </div>
      </div>
      <ManagerField manager={item.manager} />
    </div>
  )
}

export default InfinitListItem
