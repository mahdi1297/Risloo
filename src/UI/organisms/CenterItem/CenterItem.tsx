import React, { FC, useEffect, useState } from 'react'
import styles from './CenterItem.module.css'
import { CenterItemProps } from './CenterItem.type'
import { ImageSlider } from '@/UI/molecules/ImageSlider'
import { CardTitle } from '@/UI/atoms/CardTitle'
import { CardAddress } from '@/UI/atoms/CardAddress'
import { CenterContact } from '@/UI/atoms/CenterContact'
import { SkeletonLoader } from '@/UI/atoms/SkeletonLoader'

export const CenterItem: FC<CenterItemProps> = ({ data }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)


    setTimeout(() => {
      setIsLoading(false)
    }, 500)

  }, [data?.id])

  const images = data?.detail?.avatar?.map((item) => item.url);

  if (isLoading) {
    return <div className={styles.centerItem}>
      <SkeletonLoader />
    </div>
  }

  return (
    <div className={styles.centerItem}>
      <div className={styles.title}>
        <CardTitle title={data?.manager?.name || ""} />
      </div>
      <div className='flex align-center'>
        {images ?
          <ImageSlider
            images={images}
            showDots={true}
          />
          : null}
      </div>
      <br />
      <div className={styles.address}>
        <p className={styles.addressTitle}>آدرس</p>
        <CardAddress address={data?.detail?.address || ""} />
      </div>
      <div>
        <CenterContact
          phone={data?.detail?.phone_numbers?.[0] || ""}
          website={data?.detail?.phone_numbers?.[1] || ""}
          instagram={data?.detail?.phone_numbers?.[2] || ""}
        />
      </div>
    </div>
  )
}
