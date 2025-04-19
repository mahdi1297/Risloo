import React, { FC, useEffect, useState } from 'react'

import { ImageSlider } from '@/UI/molecules/ImageSlider'

import { CardAddress } from '@/UI/atoms/CardAddress'
import { CardTitle } from '@/UI/atoms/CardTitle'
import { CenterContact } from '@/UI/atoms/CenterContact'
import { RenderIf } from '@/UI/atoms/RenderIf'
import { SkeletonLoader } from '@/UI/atoms/SkeletonLoader'

import styles from './CenterItem.module.css'
import { CenterItemProps } from './CenterItem.type'

export const CenterItem: FC<CenterItemProps> = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [data?.id])

  const images = data?.detail?.avatar?.map(item => item.url)

  if (isLoading) {
    return (
      <div className={styles.centerItem}>
        <SkeletonLoader />
      </div>
    )
  }

  return (
    <div className={styles.centerItem}>
      <RenderIf condition={!data?.id ? true : false}>
        <p>لطفا یک مورد را انتخاب کنید</p>
      </RenderIf>
      <RenderIf condition={data?.id ? true : false}>
        <div className={styles.title}>
          <CardTitle title={data?.manager?.name || ''} />
        </div>

        {images ? <ImageSlider images={images} showDots={true} /> : null}
        <br />
        <div className={styles.address}>
          <p className={styles.addressTitle}>آدرس</p>
          <CardAddress address={data?.detail?.address || ''} />
        </div>
        <div>
          <CenterContact
            phone={data?.detail?.phone_numbers?.[0] || ''}
            website={data?.detail?.phone_numbers?.[1] || ''}
            instagram={data?.detail?.phone_numbers?.[2] || ''}
          />
        </div>
      </RenderIf>
    </div>
  )
}
