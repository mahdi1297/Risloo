'use client'

import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import { InfinitListProps } from './InfinitList.types'
import { CounselingCenter } from '@/types/CounselingCenter'
import InfinitListItem from '../../molecules/InfinitListItem/InfinitListItem'
import styles from './InfinitList.module.css'
import { FA_LOADING, FA_NO_MORE_CONTENT } from '@/constants/messages'

export const InfinitList: FC<InfinitListProps> = ({
    initialData,
    selectCenterItem,
    fetchMoreData,
    hasMore,
    activeItem
}) => {
    const [data, setData] = useState<CounselingCenter[]>(initialData)
    const [isLoading, setIsLoading] = useState(false)
    const observer = useRef<IntersectionObserver | null>(null)
    const loaderRef = useRef<HTMLLIElement>(null)

    const renderItem = useCallback((item: CounselingCenter) => {
        const isActive = activeItem?.id === item?.id ? true : false

        return (
            <li
                key={item.id}
                onClick={() => selectCenterItem(item)}
            >
                <InfinitListItem
                    isActive={isActive}
                    item={item}
                />
            </li>
        )
    }, [selectCenterItem])

    useEffect(() => {
        if (isLoading || !hasMore) return

        const options = {
            root: null,
            rootMargin: '20px',
            threshold: 0.1
        }

        observer.current = new IntersectionObserver(async (entries) => {
            if (entries[0].isIntersecting) {
                setIsLoading(true)
                try {
                    const newData = await fetchMoreData()
                    setData(prev => [...prev, ...newData])
                } finally {
                    setIsLoading(false)
                }
            }
        }, options)

        if (loaderRef.current) {
            observer.current.observe(loaderRef.current)
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect()
            }
        }
    }, [isLoading, hasMore, fetchMoreData])

    return (
        <div className={`${styles.pageWrapper} ${styles.transparentScrollbar}`}>
            <ul className={styles.listWrapper}>
                {data.map(renderItem)}
                <li ref={loaderRef} className={`${styles.loader} flex content-center align-center`}>
                    {isLoading && <div className={styles.loadingSpinner}>{FA_LOADING}</div>}
                    {!hasMore && <div className={styles.endMessage}>{FA_NO_MORE_CONTENT}</div>}
                </li>
            </ul>
        </div>
    )
}