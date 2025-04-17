'use client'

import React, { FC, useCallback } from 'react'
import { InfinitListProps } from './InfinitList.types'
import { CounselingCenter } from '@/types/CounselingCenter'
import InfinitListItem from '../../molecules/InfinitListItem/InfinitListItem'
import styles from './InfinitList.module.css'

export const InfinitList: FC<InfinitListProps> = ({ initialData, selectCenterItem }) => {

    const renderItem = useCallback((item: CounselingCenter) => {
        return <li key={item.id} onClick={() => selectCenterItem(item)}>
            <InfinitListItem item={item} />
        </li>
    }, [])

    const listHeight = initialData.length * (168 + 16) // Assuming each item has a height of 100px

    return (
        <div
            style={{
                height: `${listHeight}px`,
            }}
            className={`${styles.pageWrapper} ${styles.transparentScrollbar}`}>
            <ul className={styles.listWrapper}>
                {initialData.map(renderItem)}
            </ul>
        </div>
    )
}