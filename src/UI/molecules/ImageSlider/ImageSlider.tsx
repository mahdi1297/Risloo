import React, { useState, useRef, useEffect } from 'react';
import styles from './ImageSlider.module.css';
import Image from 'next/image';
import { ResponsiveImage } from '@/UI/atoms/ResponsiveImage';

interface ImageSliderProps {
    images: string[];
    showDots?: boolean;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images, showDots = true }) => {

    const renderItem = (image: string, index: number) => {
        return <div key={index} className={styles.imageSlidItem}>
            <ResponsiveImage
                src={image}
                alt='avatar image'
            />
        </div>
    }

    return <div className={`${styles.imageSlider} flex`}>
        <div className={`${styles.imageSliderList} flex`}>
            {images.map(renderItem)}
        </div>
    </div>
};
