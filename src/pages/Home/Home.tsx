'use client'

import React, { FC, useState } from 'react'
import styles from './Home.module.css'
import { HomePageProps } from './Home.types'
import { CenterItem } from '@/UI/organisms/CenterItem'
import { InfinitList } from '@/components'
import { CounselingCenter } from '@/types/CounselingCenter'

const fetchMoreCenters = async (page: number): Promise<CounselingCenter[]> => {
    const response = await fetch(`/api/centers?page=${page}&limit=10`);
    if (!response.ok) {
        throw new Error('Failed to fetch centers');
    }
    const data = await response.json();
    return data.data; // Return just the array of centers
};


const HomvePage: FC<HomePageProps> = ({ data }) => {
    const [centers, setCenters] = useState<CounselingCenter[]>(data);
    const [currentPage, setCurrentPage] = useState<number>(2);
    const [hasMore, setHasMore] = useState(true);

    const [activeItem, setActiveItem] = useState<CounselingCenter | null>(data?.[0]);

    const selectCenterItem = (item: CounselingCenter) => {
        setActiveItem(item)
    }

    const loadMoreCenters = async () => {
        const newCenters = await fetchMoreCenters(currentPage);
        setCenters(prev => [...prev, ...newCenters]);
        setCurrentPage(prev => prev + 1);
        setHasMore(newCenters.length > 0);

        return newCenters
    };



    const listHeight = centers.length * (168 + 16) // Assuming each item has a height of 100px
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
                    fetchMoreData={loadMoreCenters}
                    hasMore={hasMore}
                    loadingComponent={<p>Loading...</p>}
                    endMessageComponent={<p>No more centers available</p>}
                    scrollThreshold={0.2}
                    rootMargin="100px"
                    className="custom-list"
                    activeItem={activeItem}
                />
            </div>
            <div
                className={styles.resultColumn}>
                <CenterItem
                    data={activeItem}
                />
            </div>
        </div>
    )
}

export default HomvePage