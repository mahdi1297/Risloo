'use client'

import React, { FC, useState } from 'react'
import styles from './Home.module.css'
import { HomePageProps } from './Home.types'
import { CenterItem } from '@/UI/organisms/CenterItem'
import { InfinitList } from '@/components'
import { CounselingCenter } from '@/types/CounselingCenter'

const HomvePage: FC<HomePageProps> = ({ data }) => {
    const listHeight = data.length * (168 + 16) // Assuming each item has a height of 100px

    const [activeItem, setActiveItem] = useState<CounselingCenter | null>(data?.[0]);
  
    const selectCenterItem = (item: CounselingCenter) => {
        setActiveItem(item)
    }

    return (
        <div
            style={{
                height: `${listHeight}px`,
            }}
            className={styles.homeViewWrapper}>
            <div
                className={styles.listColumn}
            >
                <InfinitList 
                initialData={data}
                selectCenterItem={selectCenterItem}
                />
            </div>
            <div
                className={styles.resultColumn}>
                <CenterItem data={activeItem}/>
            </div>
        </div>
    )
}

export default HomvePage