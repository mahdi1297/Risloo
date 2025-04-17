// SkeletonLoader.tsx
import React from 'react';
import styles from './SkeletonLoader.module.css';

export const SkeletonLoader = () => {
    return (
        <div className={styles.skeletonContainer}>
            <div className={styles.skeletonTitle} />
            <br />
            <div className={styles.skeletonSlider}>
                {[...Array(4)].map((_, index) => (
                    <div key={index} className={styles.skeletonSlide} />
                ))}
            </div>

            <div className={styles.skeletonTitle} />
            <div className={styles.skeletonTitle} />
            <div className={styles.skeletonTitle} />
        </div>
    );
};