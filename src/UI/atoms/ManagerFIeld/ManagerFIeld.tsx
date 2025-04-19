import React, { FC } from 'react'

import styles from './ManagerFIeld.module.css'
import { ManagerFIeldProps } from './ManagerFIeld.types'

export const ManagerField: FC<ManagerFIeldProps> = ({ manager }) => {
  return (
    <div className={`flex align-center ${styles.managerBox}`}>
      <p>مدیریت: </p>
      <div>
        <p>{manager.name}</p>
      </div>
    </div>
  )
}
