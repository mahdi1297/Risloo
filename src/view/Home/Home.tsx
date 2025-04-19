'use client'

import { InfinitList } from '@/components'
import { deviceTypes, useDeviceType } from '@/hooks/useDeviceType'
import { fetchMoreCenters } from '@/services/fechMoreCenters'
import { CounselingCenter } from '@/types/CounselingCenter'

import React, { FC, useEffect, useState } from 'react'

import { CenterItem } from '@/UI/organisms/CenterItem'
import { CenterModal } from '@/UI/organisms/CenterModal'

import { RenderIf } from '@/UI/atoms/RenderIf'

import styles from './Home.module.css'
import { HomePageProps } from './Home.types'

const WINDOW_BREAKPOINT = 805

const HomeView: FC<HomePageProps> = ({ data }) => {
  const deviceType = useDeviceType(WINDOW_BREAKPOINT)

  const [centers, setCenters] = useState<CounselingCenter[]>(data)
  const [currentPage, setCurrentPage] = useState<number>(2)
  const [hasMore, setHasMore] = useState(true)
  const [activeItem, setActiveItem] = useState<{
    data: CounselingCenter | null
    showType: 'modal' | 'none'
  }>({
    data: null,
    showType: deviceType === deviceTypes.IS_MOBILE ? 'modal' : 'none',
  })

  /**
   * Reset activeItem when deviceType changed, it prevents opening modal
   * on IS_MOBILD and IS_DESKTOP changes
   */
  useEffect(() => {
    setActiveItem(prev => {
      return {
        ...prev,
        data: null,
      }
    })
  }, [deviceType])

  const selectCenterItem = (item: CounselingCenter) => {
    setActiveItem({
      data: item,
      showType: deviceType === deviceTypes.IS_MOBILE ? 'modal' : 'none',
    })
  }

  const loadMoreCenters = async () => {
    const newCenters = await fetchMoreCenters(currentPage)
    setCenters(prev => [...prev, ...newCenters])
    setCurrentPage(prev => prev + 1)
    setHasMore(newCenters.length > 0)

    return newCenters
  }

  const clearActiveItem = () => {
    setActiveItem(prev => {
      return {
        ...prev,
        data: null,
      }
    })
  }

  const listHeight = centers.length * (168 + 16)

  return (
    <>
      <div
        style={{
          height: `${listHeight}px`,
        }}
        className={styles.homeViewWrapper}
      >
        <div className={styles.listColumn}>
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
            activeItem={activeItem?.data}
          />
        </div>
        <RenderIf condition={deviceType === deviceTypes.IS_DESKTOP}>
          <div className={styles.resultColumn}>
            <CenterItem data={activeItem?.data} />
          </div>
        </RenderIf>
        <RenderIf
          condition={deviceType === deviceTypes.IS_MOBILE && (activeItem?.data?.id ? true : false)}
        >
          <CenterModal clearActiveItem={clearActiveItem} data={activeItem?.data} />
        </RenderIf>
      </div>
    </>
  )
}

export default HomeView
