import React from 'react'

import { ResponsiveImage } from '@/UI/atoms/ResponsiveImage'

import styles from './ImageSlider.module.css'

interface ImageSliderProps {
  images: string[]
  showDots?: boolean
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const renderItem = (image: string, index: number) => {
    return (
      <div key={index} className={styles.imageSlidItem}>
        <ResponsiveImage src={image} alt="avatar image" />
      </div>
    )
  }

  return (
    <div className="flex align-center">
      <div className={`${styles.imageSlider} flex`}>
        <div className={`${styles.imageSliderList} flex align-center`}>
          {images.map(renderItem)}
        </div>
      </div>
    </div>
  )
}
