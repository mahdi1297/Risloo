import React, { FC } from 'react'
import { CenterContactProps } from './CenterContact.types'
import { FiPhone, FiInstagram, FiWifi } from "react-icons/fi";
import Link from 'next/link';
import styles from './CenterContact.module.css'

export const CenterContact: FC<CenterContactProps> = ({ website, phone, instagram }) => {
    return (
        <ul className={styles.wrapper}>
            {phone ?
                <li className={styles.box}>
                    <span>
                        <FiPhone size={14} />
                    </span>
                    <p>
                        {phone}
                    </p>
                </li>
                : null}
            {website ?
                <li className={styles.box}>
                    <span>
                        <FiWifi size={14} />
                    </span>
                    <Link target='_blank' href={website}>
                        مشاهده
                    </Link>
                </li>
                : null}
            {instagram ?
                <li className={styles.box}>
                    <span>
                        <FiInstagram size={14} />
                    </span>
                    <Link target='_blank' href={instagram}>
                        مشاهده
                    </Link>
                </li>
                : null}
        </ul>
    )
}
